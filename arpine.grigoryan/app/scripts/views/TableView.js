define(['models/RowModel'],function(RowModel){

	var TableView = function(rootElement){
		this.rootElement = rootElement;
		this.listener = null;
		var that = this;
		this.viewModel = null;
		this.sortNameIsASC = true;
		this.sortCostIsASC = true;


		$(".js-row-add-btn").click(function(){
			var name = $(".js-name-inp").val();
			var cost = $(".js-cost-inp").val();
			var message;


			if (!$.isNumeric(cost)){
				message = "Cost Must be a number";
			}
			else if (name && cost) {
				that.listener('add', new RowModel(name,cost));

			} else {
				message = "invalid row";
			}


			if (message) {
				$("#message").html(message);
			}
		});

		$(that.rootElement).on("click", ".js-del", function(e){
			that.listener('remove', e.target.id);
		});

		$(that.rootElement).on("click", ".js-name", function(e){
			var replaceWith = $('<input name="temp" type="text" />');
			var connectWith = $('input[name="hiddenField"]');
			var elem = $(this);

			elem.hide();
			elem.after(replaceWith);
			replaceWith.val($(event.target).html());

			replaceWith.focus();

			replaceWith.blur(function() {

				if ($(this).val() !== "") {
					connectWith.val($(this).val()).change();
					elem.text($(this).val());
					var cost = $( '.js-cost', $( elem.parent())).html ();
					that.listener('edit', {"id" :e.target.id, "row" : new RowModel(elem.html(),cost)});
				}

				$(this).remove();
				elem.show();
			});    



		});

		$(that.rootElement).on("click", ".js-cost", function(e){
			var replaceWith = $('<input name="temp" type="text" />');
			var connectWith = $('input[name="hiddenField"]');
			var elem = $(this);

			elem.hide();
			elem.after(replaceWith);
			replaceWith.val($(event.target).html());

			replaceWith.focus();

			replaceWith.blur(function() {

				if ($(this).val() !== "") {
					connectWith.val($(this).val()).change();
					elem.text($(this).val());
					var name = $( '.js-name', $(elem.parent())).html () ;
					that.listener('edit', {"id" :e.target.id, "row" : new RowModel(name,elem.html())});
				}

				$(this).remove();
				elem.show();
			});                                  
		});


		$(that.rootElement).on("click", ".js-name-h", function(e){
			that.listener('sort', {"columnType" :"name", "isASC" : that.sortNameIsASC});
		});    


		$(that.rootElement).on("click", ".js-cost-h", function(e){
			that.listener('sort', {"columnType" :"cost", "isASC" : that.sortCostIsASC});
		});    

	};

	TableView.prototype = {
		init: function(){

		},

		setViewModel : function(viewModel){
			this.viewModel = viewModel;
		},

		setRootElement:function(element){
			this.rootElement = element;
		},

		despose:function(){
		},
		setChangeListener : function(listener){
			this.listener = listener;
		},

		changeSortingOrder : function(sortingType){
			if (sortingType.columnType === "name"){
				this.sortNameIsASC = !this.sortNameIsASC;
				if ( this.sortNameIsASC ) {
					$( '.js-name-h').html("Name &#8593");
				} else {
					$( '.js-name-h').html("Name &#8595");
				}
			} else if (sortingType.columnType === "cost"){
				this.sortCostIsASC = !this.sortCostIsASC;

				if ( this.sortCostIsASC ) {
					$( '.js-cost-h').html("Cost &#8593");
				} else {
					$( '.js-cost-h').html("Cost &#8595");
				}
			}
		},

		updateHader : function(){
			$( '.js-name-h').html("Name &#8597");
			$( '.js-cost-h').html("Cost &#8597");
		},

		setModel : function (model){
			var that = this;

			$(that.rootElement).find('.js-table-row').remove();
			model.items.forEach(function(item, i){
				$(that.rootElement).append(that.createRow(item , i));
			});

			that.updateHader();
		},

		remove_row : function(obj){
			alert("dd");
		},

		createRow :function(rowModel, index){
			return $('<tr class="js-table-row">' +
					'<td class="js-name" id="'+index+'" >'+rowModel.name+'</td>' +
					'<td class="js-cost" id="'+index+'">'+rowModel.cost+'</td>' +
					'<td class="js-del1"><button class="js-del" id="'+index+'">Remove</button><br></td>' + 
					'</tr>');
		},
	};

	return TableView;

});
