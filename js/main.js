$(function() {
	//пространство имён
	window.App = {
		Views: {},
		Models: {},
		Collections:{},
		Router:{}
		
	};
	//шаблон
	window.template = function(id) {
	   return _.template( $('#' + id).html() );
	};

	App.Router = Backbone.Router.extend({
	   routes: {
          ''     : 'index',
		  'read' : 'read'
	   },
	   
       index: function(){
	      console.log('Всем привет от индексного роута!');
	   },
     
	 read: function(){
		 console.log('это роут Read');
	  }	   
	});
	
new App.Router();	
Backbone.history.start();


})();