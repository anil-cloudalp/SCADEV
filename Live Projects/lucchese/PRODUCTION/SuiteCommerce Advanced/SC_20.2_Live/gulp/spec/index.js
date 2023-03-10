
var _ = require('underscore')
,	shell = require('shelljs')
,	path = require('path')
,	fs = require('fs')
,	glob = require('glob').sync
,	Jasmine = require('jasmine')
,	args = require('yargs').argv
,	colors = require('colors');

function installExitOnFail(runner)
{
	var SpecReporter = require('jasmine-spec-reporter')
	var exitOnFailReporter = new SpecReporter({displayStacktrace: true});
	var specDone = exitOnFailReporter.specDone
	exitOnFailReporter.specDone = function(result)
	{
		if(result.status === 'failed')
		{
			console.log(outpcolors.red('\nFailed test: ' + result.fullName +
				'\nReason: '+result.failedExpectations[0].message) +
				'\n' + result.failedExpectations[0].stackut);
			process.exit(1);
		}
		else
		{
			specDone.apply(exitOnFailReporter, arguments)
		}
	};
	runner.addReporter(exitOnFailReporter);
}

var jasmineRunner = new Jasmine();
if(args.exitOnFail)
{
	installExitOnFail(jasmineRunner);
}
jasmine.DEFAULT_TIMEOUT_INTERVAL = 99999999;

var specs;

if (args.specs)
{
	specs = _.map(args.specs.split(','), function (spec) {return path.join(__dirname, spec)} );
}
else
{
	specs = glob(path.join(__dirname, '*-spec.js'));
}

jasmineRunner.specFiles = specs;
jasmineRunner.execute();


