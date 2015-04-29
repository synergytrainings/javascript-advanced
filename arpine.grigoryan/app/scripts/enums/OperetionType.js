var com = typeof com === "undefined" ? {}:com;
com.training = com.training || {};
com.training.enums = com.training.enums || {};

com.training.enums.OperetionType = {
    SUM : {symb : "+", result: function (a,b) { return +a+(+b); }},
    SUB : {symb : "-", result: function (a,b) { return +a-(+b); }},
    MUL : {symb : "*", result: function (a,b) { return a*b; }},
    DIV : {symb : "/", result: function (a,b) { return a/b; }},
    PLUS_MIN : {symb : "+/-", result: function (a,b) { return 0; }},
    C:{symb : "C", result: function (a,b) { return 0; }},
    NO_OPER:{symb : "?", result: function (a,b) { return 0 ;}},
    EQUAL:{symb : "=", result: function (a,b) { return 0 ;}},

    getBySymbol : function (symb) {
        for (var op in this) {
            if (symb == this[op].symb) {
                return this[op];
            }
        }
    } ,
    
    getResult : function(a,b,symbol) {
        return this.getBySymbol(symbol).result(a,b);
    },

    
};