define(['text!../../table/templates/table.tpl.html', 
    'text!../../table/templates/editable.tpl.html', 
    'table/model', 'table/Sorting', 'underscore'], function(tpl, editableTpl, Model, Sorting, _) {
    "use strict";
    
    function View ($containerEl) {
        var DEFAULT_ROW_COUNT = 10;

        this.model = new Model(DEFAULT_ROW_COUNT);
        this.compiledTemplate = _.template(tpl);
        this.compiledEditableTemplate = _.template(editableTpl);
        this.element = $containerEl;

        this.render();

        if (typeof(Worker) !== "undefined") {
            if (typeof(w) == "undefined") {
                this.worker = new Worker("table/scripts/sorter.js");
            }
        } else {
            alert("Sorry! No Web Worker support.");
        }
    }

    View.prototype =  {

        /** 
         * @private
         * Binds events to given element's buttons
         */
        bindEvents_: function() {
            var that = this;

            $('.editable-row', that.element).on("dblclick", function(event) {
                var $row = $(this), 
                    itemId = that.getElementId_($row);

                that.model.startEdit(itemId);

                $('.editable-cell', $row).each(function(index, el) {
                    $(el).html(that.compiledEditableTemplate({editable: $(el).data('value')}));
                });

                $(document).on('click.document', function(e) {
                    that.model.update({
                        name: $('[data-type="name"] .editable', $row).val(), 
                        cost: $('[data-type="cost"] .editable', $row).val()
                    });
                    that.render();
                    $(document).off('click.document');
                    $row.off('click.tablerow_'+itemId);
                });

                $row.on('click.tablerow_'+itemId, function(event){
                    event.stopPropagation();
                });
            });

            $("[data-btn-type='delete']", that.element).click(function(event) {
                var $el = $(event.target);
                that.model.deleteRow(that.getElementId_($el.closest('.editable-row')));
                that.render();
            });

            $('.sortable-header', that.element).each(function(index, el) {
                var $el = $(el),
                    sorting = that.model.sorting[$el.data('type')];
                $el.toggleClass('glyphicon-sort', sorting === Sorting.NONE);
                $el.toggleClass('glyphicon-sort-by-attributes-alt', sorting === Sorting.ASC);
                $el.toggleClass('glyphicon-sort-by-attributes', sorting === Sorting.DESC);
            });

            $('.sortable-header', that.element).on('click', function() {
                var $el = $(event.target),
                    column = $el.data('type');
                var sorting = that.model.sorting[column];
                if (sorting === Sorting.NONE || sorting === Sorting.DESC) {
                    sorting = Sorting.ASC;
                } else  {
                    sorting = Sorting.DESC;
                }
                $('.loading', that.element).show();
                that.worker.postMessage({model: that.model.getData(), column: column, asc: sorting === Sorting.ASC});
                that.worker.onmessage = function(event) {
                    that.model.sorting[event.data.column] = event.data.asc ? Sorting.ASC: Sorting.DESC;
                    that.model.updateAll(event.data.model);
                    that.render();
                };
            });

            var $projectModal = $("#addProjectModal", that.element);

            $projectModal.on('hidden.bs.modal', function () {
                $('#addProjectForm', $projectModal)[0].reset();
                $('.error-block', $projectModal).text('');
            })

            $("#saveProject", $projectModal).click(function() {
                var errorMessages = [],
                    nameEl = $('#inputProjectName', $projectModal), 
                    costEl = $('#inputProjectCost', $projectModal);
                that.validate_(nameEl, errorMessages);
                that.validate_(costEl, errorMessages);
                if (errorMessages.length !== 0) {
                    return;
                }

                that.model.add({
                    name: $('#inputProjectName', $projectModal).val(), 
                    cost: $('#inputProjectCost', $projectModal).val()
                });
                $projectModal.modal('hide');
                that.render();
            });
        },

        validate_: function($el, errorMessages){
            if ($el.prop('required') && $el.val() === '') {
                var message = $("label[for='"+$el.prop('id')+"']").text() + ' is required';
                $('.error-block', $el.closest('.form-group')).text(message);
                errorMessages.push(message);
            }
        },

        getElementId_: function($el) {
            return $el.data('id');
        },

        render: function() {
            this.element.html(this.compiledTemplate({projects: this.model.getData()}));
            this.bindEvents_();
        }
    };

    return View;
});