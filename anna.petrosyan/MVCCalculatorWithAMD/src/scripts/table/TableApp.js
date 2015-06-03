/*global define*/
define('TableApp',['TableModel','TableView'],
    function(TableModel,TableView){
        'use strict';
        return {
            start : function( ){
                var tempThis=this;
                this.tableModel = new TableModel();
                this.tableModel.init();

                this.tableView=new TableView();
                this.tableModel.setChangeListener(function(model){
                    tempThis.tableView.draw();
                })

                this.tableView.init(this.tableModel.rows);
                this.tableView.draw();

                this.tableView.setDeleteListener(function(id) {
                    tempThis.tableModel.deleteRow(id) ;
                });
                this.tableView.setAddListener(function(projectId,projectName,projectCost) {
                    tempThis.tableModel.addRow(projectId,projectName,projectCost);
                });


            }
        };
    });