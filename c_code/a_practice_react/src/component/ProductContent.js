// ProductContent.js
import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductContentList from "./ProductContentList";
import '../style/ProductContent.scss';

function ProductContent () {

  const dataUrl = './data/menuData.json';
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get(dataUrl)
      .then(res => setCardData(res.data))
      .catch(console.log);
  }, []);

  return (
      <div className="product_content">
      <ul>
        {
          cardData.map(
            (data, index) => 
              <ProductContentList key={index} data={data}/>
            )
        }
      </ul>
    </div>
  )
}
 
export default ProductContent;

