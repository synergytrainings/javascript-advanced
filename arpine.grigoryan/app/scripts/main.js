requirejs.config({
                 baseUrl:'/scripts'
                 });

require(['viewModel/App'],function(App){
        App.init();
        });