var ListView = Backbone.View.extend({
	tagName: 'a',

	className: 'etsy-item col-sm-4',

	initialize: function(){
		// $('.item-list').html('');
		this.setHref();
		this.render(),
		$('.etsy-items').append( this.el ),
		$('.etsy-item').click(function(){
			$('.show-modal').click();
			console.log('.show-modal was clicked');
		});
	}, 

	renderedTemplate: _.template($('#etsy-item-template').text()),

	render: function(){
		this.$el.html(this.renderedTemplate(this.model));
	},

	setHref: function(){
		console.log('setHref has been invoked')
		var id = this.model.get('listing_id');
		var link = '#/items/' + id;
		this.$el.attr({href: link});
	}
});

var MainView = Backbone.View.extend({
	className: "item-mainview",
	
	renderedTemplate: _.template($('#etsy-MainView-template').text()),

	initialize: function(){
		this.render();
		$('.js-mainViewBox').html( this.el )

	}, 

	render: function(){
		this.$el.html(this.renderedTemplate(this.model))
	}

});
