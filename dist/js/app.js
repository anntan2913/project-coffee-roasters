import { settings, select, classNames } from './settings.js';
import Products from './components/Products.js';

const app = {
  
  initPages: function(){
    const  thisApp = this;
    
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');
    
    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        console.log('link clicked'); 
        const clickedElement = this;
        event.preventDefault();
        
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with this id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;
    
    /* add class 'active' to matching pages, remove from non-matching */
    for(let page of thisApp.pages){      
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class 'active' to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){      
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      ); 
    }
  },

  initProducts: function(){
    const thisApp = this;

    new Products(thisApp.data.products);
  }, 

  initData: function(){
    const thisApp = this;
    
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {        
        thisApp.data.products = parsedResponse;
        thisApp.initProducts();        
      });
  },

  init: function() {
    const thisApp = this;
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);
       
    thisApp.initData();
    thisApp.initPages();    
  },
};

app.init();