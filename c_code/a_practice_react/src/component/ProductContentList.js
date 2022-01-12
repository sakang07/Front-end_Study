// ProductContentList.js
import React from "react";
import '../style/ProductContentList.scss';

function ProductContentList (props) {

  // console.log({props});
  
  return (
    <li className="product_content_list">
      <figure>
        {/* <img src=""></img> */}
      </figure>
      <dl>
        <dt>{props.pageTitle}</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.di</dd>
      </dl>
      <button>more</button>
    </li>
  )
}

export default ProductContentList;
