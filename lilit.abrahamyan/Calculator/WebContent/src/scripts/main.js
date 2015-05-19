requirejs.config({
    baseUrl: 'scripts'
});

requirejs(['Calculator'],function(Calculator){
    Calculator.init($('.main'));
});