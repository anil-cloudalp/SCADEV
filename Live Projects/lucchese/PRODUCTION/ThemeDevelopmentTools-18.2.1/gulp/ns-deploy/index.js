/* jshint node: true */
'use strict';


var async = require('async')
,	through = require('through')
,	PluginError = require('plugin-error')

,	fs = require('./fs')
,	ui = require('./ui')
,	net = require('./net')
,	args = require('yargs').argv
,	default_info = {}

,	package_manager = require('../package-manager');




function deploy(params)
{
	if(args.skipDeploy)
	{
		setTimeout(function()
		{
			console.log('Skipping deploy because of the --skip-deploy command line argument. ');
			process.exit(0);
		}, 5000)
	}
	default_info.script = args.scriptId || params.scriptId || 'customscript_sca_deployer';
	default_info.deploy = args.deployId || params.deployId || 'customdeploy_sca_deployer';
	default_info.distroName = params.distroName;
	default_info.user_agent = params.user_agent;

	var files = [];
	return through.through(
		// each callback
		function(file)
		{
			/*jshint validthis:true */
			if (file.isNull())
			{
				this.push(file);
			}
			else if (file.isStream())
			{
				this.emit('error', new PluginError('gulp-ns-deploy', 'Stream content is not supported'));
			}
			else if (file.isBuffer())
			{
				files.push(file);
			}
		}
		// End Callback
	,	function()
		{
			var waterfall = [
					function (cb)
					{
						cb(null, {info: default_info, options: params, files: files, publicList: params.publicList});
					}
				,	fs.read
				,	ui.selectToken,
                ,	net.authorize,
				,	package_manager.distro.isSCLite ? doUntilGetWebsiteAndDomain : doUntilGetFolder
				,	fs.write
				,	ui.backup
				,	fs.processFiles
				,	net.postFiles
				,	package_manager.distro.isSCLite ? net.writeConfig : function(distro, cb2){cb2(null, distro);}
			];

			// --no-backup argument has a preference over distro.json setting that comes in params.backup
			if (args.backup !== undefined && args.backup || args.backup === undefined && params.backup)
			{
				waterfall.push(fs.processBackup);
				waterfall.push(net.uploadBackup);
			}

			/*jshint validthis:true */
			var self = this;
			async.waterfall(waterfall, function (err)
			{
				if (err)
				{
					return self.emit('error', new PluginError('gulp-ns-deploy', err.message));
				}
				self.emit('end');
			});
		}
	);
}

function doUntilGetWebsiteAndDomain(deploy, cb)
{
	var error;

	async.doUntil(
		//repeat the following function
		function(cb_dountill)
		{
			async.waterfall([
				async.apply(net.getWebsitesAndDomains, deploy),
				ui.getWebsitesAndDomains,
				net.getConfigurationForDomain
				// ui.getConfigurationForDomain
			], function(err)
			{
				error = err;
				cb_dountill();
			});
		},
		//until this function returns true
		function()
		{
			if (error === null)
			{
				return true;
			}

			console.log(error);
			return false;
		},
		//and then invoke callback
		function()
		{
			cb(null, deploy);
		}
	);

}

//repeat get target folder until success
function doUntilGetFolder(deploy, cb)
{
	var error;

	async.doUntil(
		//repeat the following function
		function(cb_dountill)
		{
			async.waterfall([
				async.apply(net.targetFolder, deploy),
				ui.targetHostingFolder,
				ui.targetPublisherFolder,
				ui.targetSSPFolder,
			], function(err)
			{
				error = err;
				cb_dountill();
			});
		},
		//until this function returns true
		function()
		{
			return error === null;
		},
		//and then invoke callback
		function()
		{
			//map the correct folder if we came from interactive ui
			if (deploy.folder_inquirer && deploy.folder_inquirer.target_folder)
			{
				deploy.info.target_folder = deploy.folder_inquirer.target_folder.application;
				delete deploy.folder_inquirer;
			}

			cb(null, deploy);
		}
	);
}

function rollback(cb)
{
	async.waterfall([
			function (cb)
			{
				cb(null, {info: default_info});
			}
		,	fs.read
		,	ui.email
		,	ui.password
		,	net.roles
		,	ui.roles
		,	net.targetFolder
		,	ui.targetFolder
		,	fs.write
		,	net.getVersions
		,	ui.rollback
		,	net.rollback
		]
	,	cb
	);

}

module.exports = {
	deploy: deploy
,	rollback: rollback
};
