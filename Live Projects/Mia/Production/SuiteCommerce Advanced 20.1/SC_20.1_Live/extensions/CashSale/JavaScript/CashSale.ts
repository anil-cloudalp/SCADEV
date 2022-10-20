/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="CashSale"/>

import * as Utils from '../../../Commons/Utilities/JavaScript/Utils';

import CashSaleDetailsView = require('./CashSale.Details.View');
import CashSaleOpenListView = require('./CashSale.OpenList.View');
import { MyAccountMenu } from '../../../Advanced/Header/JavaScript/MyAccountMenu';


const CashSale: any = {
    mountToApp: function(application): void {
        const pageType = application.getComponent('PageType');

        pageType.registerPageType({
            name: 'CashSaleDetail',
            routes:['cashsales/:id','cashsales/:id/:referrer'],
            view: CashSaleDetailsView
        });

        pageType.registerPageType({
            name: 'OpenCashSalessHistory',
            routes: ['cashsales', 'cashsales?*options'],
            view: CashSaleOpenListView
        });
		
		const myAccountMenu = MyAccountMenu.getInstance();
		myAccountMenu.addSubEntry({
			entryId: 'billing',
			id: 'cashsales',
			name: Utils.translate('Cash Sales'),
			url: 'cashsales',
			index: 2
		});
    }
};

export = CashSale;
