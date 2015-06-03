
define(['models/RowModel'],function(RowModel){

	var TableModel = function(){
		this.items = [];
		this.listener = null;
	};

	TableModel.prototype = {
		init: function(){
		},

		despose:function(){
		},

		setChangeListener:function(listener){
			this.listener = listener;
		},

		addItem: function(newRow) {
			this.items.push(newRow);
			this.listener();
		},

		editItem: function(data) {
			var index = data.id;
			var row = data.row;

			if (index !== -1) {
				this.items[index] = row;
			}
			this.listener();

		},

		sortItem: function(data) {
			var sorted = this.isSorted(data.columnType, data.isASC);
			while(sorted ===false){
				this.shuffle();
				sorted = this.isSorted(data.columnType, data.isASC);
			}
			this.listener(data);
		},

		shuffle : function() {
			var items = this.items;
			for(var j, x, i = items.length; i; j = Math.floor(Math.random() * i), x = items[--i], items[i] = items[j], items[j] = x);
		},

		isSorted : function(columnType,isASC){
			if (columnType === "name"){

				for(var i=1; i<this.items.length; i++) {
					if (isASC && this.items[i-1].name > this.items[i].name) { 
						return false;
					} else if (!isASC && this.items[i-1].name < this.items[i].name) {
						return false;
					}
				}
			} 
			else if (columnType === "cost"){
				for(var j=1; j<this.items.length; j++) {
					if (isASC && this.items[j-1].cost > this.items[j].cost) { 
						return false;
					} else if (!isASC && this.items[j-1].cost < this.items[j].cost) {
						return false;
					}
				}
			}
			return true;
		},

		removeItem: function(index) {
			this.items.splice(index, 1);
			this.listener();
		},

	};

	return TableModel;
});
