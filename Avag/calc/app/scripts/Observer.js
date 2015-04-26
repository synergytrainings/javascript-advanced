/* global define */
define(function(){
	'use strict';

	var Observer = function(){ 
		this.map = {}; 
	};
	Observer.prototype = {
		constructor: Observer,
		addListener : function(eventType, listener){
			if( !this.map.hasOwnProperty(eventType) ){
				this.map[eventType] = [];
			}
			this.map[eventType].push(listener);
		},
		removeListener: function(eventType, listener){
			var listenerList = this.map[eventType];
			for(var i=0; listenerList[i]; ++i)	{
				if(listenerList[i] === listener){
					listenerList.splice(i,1);	
				}				
			}
		},
		trigger:function(eventType, event){
			var listenerList = this.map[eventType];
			listenerList.forEach(function(listener){
				listener(event);
			});
		}
	};
	return Observer;
});
