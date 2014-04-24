var ListView = Backbone.View.extend({
	tagName: 'a',

	className: 'etsy-item col-sm-4',

	initialize: function(){
		// $('.item-list').html('');
		this.setHref();
		this.render(),
		$('.etsy-items').append( this.el )
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

