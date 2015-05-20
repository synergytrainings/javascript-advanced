requirejs.config({
    baseUrl: 'scripts/calculator'
});

requirejs(['Calculator'],function(Calculator){
    Calculator.init($('.main'));
});