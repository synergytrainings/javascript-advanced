
define(['models/CalculatorModel','models/TableModel',
        'views/CalculatorView', 'views/TableView',
        'viewModel/CalculatorModelView',
        'viewModel/TableViewModel'],
       function(CalculatorModel,TableModel,CalculatorView,TableView,
                CalculatorModelView,TableViewModel){
       var App = {};
       
       
       App.init = function(){
       
       var model = new CalculatorModel();
       var view = new CalculatorView();
       
       var modelView = new CalculatorModelView(model, view);
       
       view.setModelView(modelView);
       
       var tableView = new TableView($('.js-table'));
       var tableViewModel = new TableViewModel(new TableModel(), tableView);
       
       tableViewModel.init();
       
       
       };
       return App;
       
       });
