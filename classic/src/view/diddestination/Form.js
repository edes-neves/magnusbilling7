/**
 * Classe que define o form de "Diddestination"
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
 * 24/09/2012
 */
Ext.define('MBilling.view.diddestination.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.diddestinationform',
    fieldsHideUpdateLot: ['id_user', 'id_did'],
    fieldsHideEdit: ['id_user', 'id_did'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'didlookup',
            fieldLabel: t('did'),
            name: 'id_did',
            ownerForm: me
        }, {
            xtype: 'userlookup',
            ownerForm: me,
            allowBlank: App.user.isClient
        }, {
            xtype: 'booleancombo',
            name: 'activated',
            fieldLabel: t('status'),
            allowBlank: false
        }, {
            xtype: 'numbercombo',
            name: 'priority',
            fieldLabel: t('priority'),
            allowBlank: true
        }, {
            style: 'margin-top:25px; overflow: visible;',
            xtype: 'fieldset',
            title: t('Did Destination'),
            collapsible: true,
            collapsed: false,
            defaults: {
                labelWidth: 75,
                anchor: '100%',
                labelAlign: me.labelAlignFields
            },
            items: [{
                xtype: 'didtypefullcombo',
                name: 'voip_call',
                fieldLabel: t('type')
            }, {
                xtype: 'textfield',
                name: 'destination',
                fieldLabel: t('Destination'),
                value: '',
                allowBlank: true,
                hidden: App.user.isClient || App.user.isAgent
            }, {
                xtype: 'ivrlookup',
                ownerForm: me,
                name: 'id_ivr',
                fieldLabel: t('IVR'),
                allowBlank: true
            }, {
                xtype: 'queuelookup',
                ownerForm: me,
                name: 'id_queue',
                fieldLabel: t('Queue'),
                allowBlank: true
            }, {
                xtype: 'siplookup',
                ownerForm: me,
                name: 'id_sip',
                fieldLabel: t('SIP'),
                allowBlank: true
            }]
        }];
        me.callParent(arguments);
    }
});