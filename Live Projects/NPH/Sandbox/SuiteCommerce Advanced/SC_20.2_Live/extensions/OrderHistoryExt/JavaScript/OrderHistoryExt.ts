/// <amd-module name="OrderHistoryExt"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';
import DownItemsListView = require('./DownItems.List.View');
import { MyAccountMenu } from '../../../Advanced/Header/JavaScript/MyAccountMenu';
import MusicainResourceView = require('./OrderHistory.MusicianResource.List.View');

const OrderHistoryExt: any = {
	
    mountToApp: function(application) {
		
        const pageType = application.getComponent('PageType');
        
		pageType.registerPageType({
			'name': 'downloadableItems'
		,	'routes': ['downloadable-items']
		,	'view': DownItemsListView
		});
		pageType.registerPageType({
			'name': 'musicianresourceitems'
		,	'routes': ['musician-resource-products']
		,	'view': MusicainResourceView
		});
		const myAccountMenu = MyAccountMenu.getInstance();
		
		myAccountMenu.addSubEntry({
			entryId: 'orders',
			id: 'downloadableitems',
			name: Utils.translate('Downloadable Items'),
			url: 'downloadable-items',
			index: 6,
			permission: 'transactions.tranFind.1,transactions.tranSalesOrd.1'
		});
		myAccountMenu.addSubEntry({
			entryId: 'orders',
			id: 'musicianresourceitems',
			name: Utils.translate("Musician's Resource Products"),
			url: 'musician-resource-products',
			index: 7,
			permission: 'transactions.tranFind.1,transactions.tranSalesOrd.1'
		});
    }
};

export = OrderHistoryExt;
