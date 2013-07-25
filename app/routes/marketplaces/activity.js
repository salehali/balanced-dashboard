Balanced.ActivityRoute = Balanced.AuthRoute.extend({
});

Balanced.ActivityIndexRoute = Balanced.AuthRoute.extend({
    redirect: function () {
        this.transitionTo('activity.transactions');
    }
});

Balanced.ActivityTransactionsRoute = Balanced.AuthRoute.extend({
    title: 'Activity',
    
    setupController: function (controller, model) {
        this._super(controller, model);

        if (this.controllerFor('activity').get('category') !== 'transaction') {
            this.controllerFor('activity').set('type', 'transaction');
        }
    }
});

Balanced.ActivityCustomersRoute = Balanced.AuthRoute.extend({
    setupController: function (controller, model) {
        this._super(controller, model);

        if (this.controllerFor('activity').get('category') !== 'account') {
            this.controllerFor('activity').set('type', 'account');
        }
    }
});

Balanced.ActivityFundingInstrumentsRoute = Balanced.AuthRoute.extend({
    setupController: function (controller, model) {
        this._super(controller, model);

        if (this.controllerFor('activity').get('category') !== 'funding_instrument') {
            this.controllerFor('activity').set('type', 'funding_instrument');
        }
    }
});
