
var com = typeof com === "undefined" ? {}:com;
com.training = com.training || {};
com.training.app = com.training.app || {};
com.training.models = com.training.models || {};
com.training.views = com.training.views || {};



var App = {};


App.init = function(){
    
    var model = new com.training.models.CalculatorModel();
    var view = new com.training.views.CalculatorView();
    
    var modelView = new com.training.app.CalculatorModelView(model, view);

    

    view.setModelView(modelView);
    
    
    
};

App.init();
