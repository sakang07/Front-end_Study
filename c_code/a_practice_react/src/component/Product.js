// Product.js
import React from "react";
import ProductContent from "./ProductContent";
import '../style/Product.scss';

function Product () {
  return (
    <section id="product">
      <h2>Product</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lobortis sed cras malesuada. Justo quis malesuada ante amet nibh purus eget urna viverra. In ultricies velit amet, sit pellentesque quisque sociis nullam pharetra. Facilisis facilisis nunc sit ornare adipiscing </p>
      <hr />

      <ProductContent />
    </section>

  )
}

export default Product;