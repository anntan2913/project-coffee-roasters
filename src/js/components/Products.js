import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constuctor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderProducts();
  }

  renderProducts(){
    const thisProduct = this;

    const generatedHTML = templates.products(thisProduct.data);

    //thisProduct.dom = {};
    //thisProduct.dom.wrapper = document.querySelectorAll(select.containerOf.products);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const productsCon = document.querySelector(select.containerOf.products);
    productsCon.appendChild(thisProduct.element);
    // but how for more?
  }
}

export default Product;