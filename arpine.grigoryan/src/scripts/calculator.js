OperatorEnum = {
    SUM : {symb : "+", result: function (a,b) { return a+b; }},
    SUB : {symb : "-", result: function (a,b) { return a-b; }},
    MUL : {symb : "*", result: function (a,b) { return a*b; }},
	DIV : {symb : "/", result: function (a,b) { return a/b; }},

	getBySymbol : function (symb) {
		for (var op in this) {
			if ( !(this[op] instanceof Function) && symb == this[op].symb) {
				return this[op];
			}
		}
	} ,
 
	 getResult : function(a,b,symbol) {
		return this.getBySymbol(symbol).result(a,b);
	 },

};