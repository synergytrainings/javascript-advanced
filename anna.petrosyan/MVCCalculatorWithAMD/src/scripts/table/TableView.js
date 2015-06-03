/*global define ,$*/
define('TableView',['TableModel',"RowView"],function(TableModel,RowView){
    "use strict";
    var TableView=function(){
        this.rows;
        this.deleteListener;
        this.addListener;
        this.descending=true;
    };
    TableView.prototype= {
        /**
         * Initializing Table View.
         */
        init: function(rows) {
            this.rows=rows;
        },
        draw:function(){
        $("#tableContainer").empty();
            $("#tableContainer").append("<tr><th></th><th class='projectIdColumn'>Project ID</th> <th data-field='name'>Project Name</th><th data-field='price'>Project Price</th></tr>");
                $.each(this.rows, function(i,row){
                    var rowView=new RowView();
                    rowView.init(row);
                    $("#tableContainer").append(rowView.draw(row));
                });
            this.deleteProjectInit();
            this.addProjectInit();
            this.sortInit();

        },
        /**
         * Setting change listener
         */

        setDeleteListener:function(listener){
            this.deleteListener=listener;
        },
        setAddListener:function(listener){
            this.addListener=listener;
        },
        deleteProjectInit:function(){
            var tempThis=this;
            $('.remove_but').on('click', function(){
                tempThis.deleteListener($(this).attr("data-id"));

            });
        },
        addProjectInit:function(){
            var tempThis=this;
            $("input[data-field='projectAddonButton']" ).bind('click', function(){
                var projectId=$("input[data-field='projectIdInput']").val();
                $("input[data-field='projectIdInput']").val("");
                var projectName=$("input[data-field='projectNameInput']").val();
                $("input[data-field='projectNameInput']").val("");
                var projectCost=$("input[data-field='projectCostInput']").val();
                $("input[data-field='projectCostInput']").val("");
                tempThis.addListener(projectId,projectName,projectCost);

            });
        },
        sortInit:function(){
            var tempThis=this;
            $('.projectIdColumn').on('click', function(){
                tempThis.bogosortByProjectId();

            });
        },
        shuffle : function(v) {
            for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x){

            }
            return v;
        },

        isSortedbyProjectId :function(v){
            for(var i=1; i<v.length; i++) {

                if ((v[i-1].getProjectId() < v[i].getProjectId()) && this.descending) { return false; }
                if ((v[i-1].getProjectId() > v[i].getProjectId()) && !this.descending) { return false; }
            }
            return true;
        },

        bogosortByProjectId :function(){
            var sorted = false;
            while(sorted ===false){
                this.rows = this.shuffle(this.rows);
                sorted = this.isSortedbyProjectId(this.rows);
            }
            this.descending=!this.descending;
            this.draw();
        }


    };
    return TableView;
});

