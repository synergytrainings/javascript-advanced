/*global define*/
define('RowView',function(){
    "use strict";
    var RowView=function(){
    this.model=null;
    };
    RowView.prototype= {
        init:function(model){
            this.model=model;
        },
       draw:function(model) {
           return "<tr>"+"<td><input class='remove_but' type='button' value='delete' data-field='removeButton' data-id="+this.model.getProjectId()+" ></></td>"+
               "<td data-field='" + this.model.getProjectId() + "projectId" +
               "'>"+this.model.getProjectId()+"</td><td data-field='" + this.model.getProjectId() + "projectName" +
               "'>"+this.model.getProjectName()+"</td><td data-field='" + this.model.getProjectId() + "projectCost" +
               "'>"+this.model.getProjectCost()+"</td></tr>";
       }

    };
    return RowView;
});

