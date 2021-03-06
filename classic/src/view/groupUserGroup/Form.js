/**
 * Classe que define o form de "Call"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 19/09/2012
 */
Ext.define('MBilling.view.groupUserGroup.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.groupusergroupform',
    fieldsHideUpdateLot: ['id_user'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('Group'),
            readOnly: true
        }, {
            name: 'user_prefix',
            fieldLabel: t('User Prefix'),
            allowBlank: true
        }, {
            style: 'margin-top:25px; overflow: visible;',
            xtype: 'fieldset',
            title: t('Select one or more groups'),
            collapsible: true,
            collapsed: false,
            items: [{
                anchor: '100%',
                fieldLabel: '',
                xtype: 'groupusertag',
                allowBlank: true
            }]
        }];
        me.callParent(arguments);
    }
});