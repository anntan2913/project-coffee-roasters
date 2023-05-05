
export const select = {
  templateOf: {
    products: '#template-products',
  },
  
  containerOf: {           
    pages: '#pages',        
    products: '.product-page',
    home: '.home-page',
    contact: '.contact-page',

  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  nav: {  
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {   
  db: { 
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },  
};
 
export const templates = {    
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};


//selektory, nazwy klas, ustawienia...

