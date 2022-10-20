define('TCI.CheckoutCustomizationsExtension.SchoolDistrictLookupSS.Model',
[
    'SC.Model',
    'Configuration'
],
function
(
    SCModel,
    Configuration
)
{
    'use strict';

    return SCModel.extend(
    {
        name: 'TCI.CheckoutCustomizationsExtension.SchoolDistrictLookupSS.Model',
        get: function (zipCode)
        {
            try
            {
                var data = this.getSchools(zipCode);
                return {success: true, data: data};
            }
            catch (e)
            {
                return {success: false, message: e.message};
            }
        },
        getSchools: function(zipCode)
        { 
          
            var filters =
            [
               new nlobjSearchFilter('entityid', null, 'doesnotstartwith', 'WEB'),
               new nlobjSearchFilter('entityid', null, 'isnot', 'TCI'),
               new nlobjSearchFilter('zipcode', null, 'startswith', zipCode),
               new nlobjSearchFilter('category', null, 'noneof','@NONE@', Configuration.get('schoolDistrict.guestSelect'))
            ];

            var columns =
            [
                new nlobjSearchColumn('companyname'),
                new nlobjSearchColumn('custentitysubscriber_id'),
                new nlobjSearchColumn('zipcode'),
                new nlobjSearchColumn('custentitytax_exempt_received'),
                new nlobjSearchColumn('custentity1'), // Fulfillment Flag field
                new nlobjSearchColumn('terms')
            ];

            var results = nlapiSearchRecord('customer', null, filters, columns);
            
            var schools = [];
            if (results != null && results.length > 0)
            {
                schools = results.map(function(result)
                {
                    return {
                        companyname: result.getValue('companyname'),
                        custentitysubscriber_id: result.getValue('custentitysubscriber_id'),
                        custentitytax_exempt_received: result.getValue('custentitytax_exempt_received'),
                        internalid: result.getId(),
                        fulfillmentFlag: result.getValue('custentity1'),
                        terms: result.getValue('terms')
                    }
                });                
            }
            
            return schools;
        },
        update: function(data)
        {
            // Set the lead to a company and populate company name info.  Create as a subcustomer if this was designated as a School credit card or Purchase order
            if (data.userId)
            {
                try
                {
                    var updateFields =
                    [
                        'altname',
                        'companyname'
                    ];
                    var updateValues =
                    [
                        data.companyName,
                        data.companyName
                    ];

                    if (data.payingWith && parseInt(data.payingWith) !== 2 && data.schoolCustomerInternalId && !isNaN(data.schoolCustomerInternalId) && parseInt(data.schoolCustomerInternalId) !== -1)
                    {
                        updateFields.push('isperson');
                        updateValues.push('F');

                        updateFields.push('custentity_parentsca');
                        updateValues.push(parseInt(data.schoolCustomerInternalId));

                        if (data.subscriberId)
                        {
                            updateFields.push('parent');
                            updateValues.push(data.schoolCustomerInternalId);
                        }

                        if (data.taxExemption)
                        {
                            updateFields.push('custentitytax_exempt_received');
                            updateValues.push(data.taxExemption);
                        }
                    }
                    else if (data.payingWith && parseInt(data.payingWith) !== 2 && data.schoolCustomerInternalId && !isNaN(data.schoolCustomerInternalId) && parseInt(data.schoolCustomerInternalId) === -1)
                    {
                        updateFields.push('parent');
                        updateValues.push('');
                    }
                    else if (data.payingWith && parseInt(data.payingWith) === 2)
                    {
                        updateFields.push('isperson');
                        updateValues.push('T');
                        updateFields.push('category');
                        updateValues.push(Configuration.get('schoolDistrict.guestSelect'));
                        updateFields.push('custentitysubscriber_id');
                        updateValues.push('');
                    }

                    nlapiSubmitField('customer', data.userId, updateFields, updateValues);

                    return {success: true}
                }
                catch (e)
                {
                    return {success: false, message: e.message}
                }
            }
        }
    });
});