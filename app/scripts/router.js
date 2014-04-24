var MainRouter = Backbone.Router.extend({
	routes: {
		""								: "showShops",
		"#"								: "showShops",
		"shops"						: "showShops",
		"shops/:keyword"	: "showShops",
		"shops/:keyword"	: "pushData",
		"items/:itemId" 	: "mainView"
	},

	initialize: function(){
		console.log('Hey dude, A router was just born!');
		// this is used to render what is fetched
		// in the 'showShops'
		this.items = new EtsyItemsCollection;
		
		this.items.on('add', function(item){
				new ListView({model: item})
		})

		console.log(this.items)
	},

	showShops: function(keyword){
		console.log('showShops is being called by the router')
		// $('.etsy-items').html('');
		// if (keyword) {
		// 	this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"			
		// }
		this.items.fetch();

	},

	pushData: function(keyword){
		if (keyword) {
			this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"			
		}
		this.items.fetch();

		var rawData = this.items;
		console.log(rawData)

		savedData = new PricesCollection(rawData);
		
	},

	mainView: function(itemId){
		console.log('Should be seeing the larger view', this.items)
		// ************   Not Rendering
		var item = this.items.find(function(item){
    console.log('Do you see it?')
      return item.get('listing_id') == itemId;
    });
    new MainView({model: item})

	}
});

