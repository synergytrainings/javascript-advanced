define(['table/project', 'table/Sorting'], function (Project, Sorting) {
	"use strict";

	function Model(initialDataCnt) {
		this.data; 
		this.item;
        this.sorting = {name: Sorting.NONE, cost: Sorting.NONE};
		if (initialDataCnt) {
			this.populateInitialData_(initialDataCnt);
		}
	}

	Model.prototype = {

		generateUUID_: function(){
		    var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		        var r = (d + Math.random()*16)%16 | 0;
		        d = Math.floor(d/16);
		        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
		    });
		    return uuid;
		},

		populateInitialData_: function(cnt){
            this.data = [];
            for (var i=0; i<cnt; i++) {
                this.data.push(new Project(this.generateUUID_(), 'Project No.' + i, +(Math.random() * 10000).toFixed(2)));
            }
            return this.data;
        },

        deleteRow: function(id) {
        	this.data = this.data.filter(function(item) {
        		return item.id !== id;
        	});
        },

        update: function(obj) {
        	this.item.name = obj.name;
        	this.item.cost = obj.cost;
        	this.item = null;
        },

        updateAll: function(data) {
            this.data = [];
            for (var i=0; i<data.length; i++) {
                var obj = data[i];
                this.data.push(new Project(obj.id, obj.name, obj.cost));
            }
        },

        add: function(obj){
        	this.data.push(new Project(this.generateUUID_(), obj.name, obj.cost));
        },

        getData: function() {
        	return this.data;
        },

        startEdit: function(id) {
        	for (var i=0; i < this.data.length; i++) {
        		if (this.data[i].id === id) {
        			this.item = this.data[i];
        			break;
        		}
			}
        }
	};

	return Model;
});