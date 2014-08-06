Ext.application({
    name   : 'MyApp',

    launch : function() {

        Ext.create('MyApp.WelcomePanel', {
            renderTo: Ext.getBody()
        });

    }
});
