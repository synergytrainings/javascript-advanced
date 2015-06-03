/*global define*/
define('RowModel',function(){
    "use strict";
    var RowModel=function(){
        this.id=null;
        this.projectName=null;
        this.projectCost=null;
        this.changeListener=null;
    };
    RowModel.prototype= {
        init:function(id,name,cost){
            this.id=id;
            this.projectName=name;
            this.projectCost=cost;
        },
        getProjectId:function(){
        return this.id;
        },
        getProjectName:function(){
            return this.projectName;
        },
        getProjectCost:function(){
            return this.projectCost;
         },
         /* Setting change listener
         */
        setChangeListener: function(changeListener){
            this.changeListener=changeListener;
        }


    };
    return RowModel;
});

