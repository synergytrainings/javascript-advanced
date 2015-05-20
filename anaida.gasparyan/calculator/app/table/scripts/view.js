define(['text!../../table/templates/table.tpl.html', 
    'text!../../table/templates/editable.tpl.html', 
    'table/model', 'underscore'], function(tpl, editableTpl, Model, _) {
    "use strict";
    
    function View ($containerEl) {
        var DEFAULT_ROW_COUNT = 10;

        this.model = new Model(DEFAULT_ROW_COUNT);
        this.compiledTemplate = _.template(tpl);
        this.compiledEditableTemplate = _.template(editableTpl);
        this.element = $containerEl;

        this.render();
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