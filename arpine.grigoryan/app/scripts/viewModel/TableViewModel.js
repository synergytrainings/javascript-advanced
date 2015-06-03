define([''], function(){
      var TableViewModel = function(model,view){
            this.view = view;
            this.model = model;
      };

      TableViewModel.prototype = {
            setView : function(view){
                  this.view = view;
            },
            setModel : function(model){
                  this.model = model;
            },

            init: function(){
                  var that = this;

                  that.model.init();

                  that.model.setChangeListener(function(sortingOrder){
                        // switch(eventType){
                        //       case 'add':
                        
                        that.view.setModel(that.model);
                        if (sortingOrder) {
                              that.view.changeSortingOrder(sortingOrder);
                        }
                  });

                  that.view.init();
                  that.view.setViewModel(that);
                  that.view.setChangeListener(function(eventType, data){
                        switch(eventType){
                              case 'add':
                                    that.model.addItem(data);
                              break;

                              case 'remove':
                                    that.model.removeItem(data);
                               break;

                              case 'edit':
                                    that.model.editItem(data);
                              break;

                              case 'sort':
                                    that.model.sortItem(data);
                              break;
                        }
                  });
            },

            dispose:function(){
                  this.model.dispose();
                  this.view.dispose();
            },
            getElement : function(){
                  return this.view.getElement();
            },
            changeState: function(row){
                  this.model.addItem(row);
                  this.view.setModel(this.model);
            }
      };
      return TableViewModel;

});