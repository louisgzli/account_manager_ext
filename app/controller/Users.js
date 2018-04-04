Ext.define('AM.controller.Users', {//define class ,then the class can be instantiated
    extend: 'Ext.app.Controller',
    views: [
        'user.List',
        'user.Edit'
    ],
    stores:['Users'],
    models:["User"],
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'userlist': {
            itemdblclick: this.editUser
        }
        });

    },
    editUser: function(grid,recoid){
        var  view = Ext.widget("useredit");// equivalent to Ext.create('widget.useredit')
        view.down("form").loadRecord(record);//Every component in Ext JS 4 has a down function, which accepts a ComponentQuery selector to quickly find any child component.
    },


    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});