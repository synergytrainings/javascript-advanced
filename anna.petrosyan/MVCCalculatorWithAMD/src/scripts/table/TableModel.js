/*global define*/
define('TableModel',['RowModel'],function(Row){
    "use strict";
    var TableModel=function(){
        this.rows=null;
    };
    TableModel.prototype= {
        /**
         * Initializing Table Model.
         */
        init: function () {
            this.rows=[];
            for(var i=1;i<=10;i++){
                var row=new Row();
                row.init(i,"Project " + i,Math.random()*100000);
                this.rows.push(row);
            }

        },
        /**
         * Setting change listener
         */
        setChangeListener: function(changeListener){
            this.changeListener=changeListener;
        },
        getRows:function(){
            return this.rows;

    },
        addRow:function(projectId,projectName,projectCost){
            var row=new Row();
            row.init(projectId,projectName,projectCost);
            this.rows.push(row);
            this.changeListener(this);
    },
        deleteRow:function(id){
            var index=this.getProjectIndexWithSuchId(id);
            this.rows.splice( index, 1 );
            this.changeListener(this);
        },
        getProjectIndexWithSuchId:function(id){
            var index=0;
            for(var i=0;i<this.rows.length;i++){
                if(this.rows[i].getProjectId()===id) {
                    return i;
                }
            }

        }


    };
    return TableModel;
});

