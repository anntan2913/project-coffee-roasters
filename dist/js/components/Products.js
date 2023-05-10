import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor(data) {
    const thisProduct = this;

    thisProduct.data = data;

    thisProduct.renderProducts();
  }

  renderProducts(){
    const thisProduct = this;

    const generatedHTML = templates.products({ products: thisProduct.data });

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsCon = document.querySelectorAll(select.containerOf.products);
    for(let productCon of productsCon){
      productCon.appendChild(thisProduct.element.cloneNode(true));
    }
  }
}

export default Products;