import { settings, select, templates, classNames } from './settings.js';

const app = {

  initData: function(){
    const thisApp = this;
      
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        //console.log('parsedResponse', parsedResponse);

        //save parsedResponse as thisApp.data.products 
        thisApp.data.products = parsedResponse;        
      });
  },


  init: function() {
    const thisApp = this;
    
    thisApp.initData()
  }
};

app.init();