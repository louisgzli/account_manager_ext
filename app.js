/**
 * Created by Administrator on 2018/4/3 0003.
 */
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
    controllers: [
        'Users'
    ],
    launch: function(   ) {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    xtype: 'userlist',
                    title: 'Users',
                    html : 'List of users will go here'
                }
            ]
        });
    }

});