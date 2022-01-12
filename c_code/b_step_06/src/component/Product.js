// Product.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductContent from './ProductContent';
import '../style/Product.scss';


export default function Product() {

const [num, setNum] = useState(0)
const [menuData, setMenuData] = useState([]);
useEffect(() => {
  axios.get('./data/menuData.json')
    .then(res => setMenuData(res.data))
}, [])

const code = menuData.filter((data, index) => index === num);

const fnTab = (e, i) => {
  e.preventDefault();
  setNum(i);
}

  return (
    <div className='product_area'>
      <div className='btn_part'>
        {menuData.map((data, idx) => 
          <button key={idx} type='button' onClick={e => fnTab(e, idx)}>
            {data.pageTitle}
          </button>
          )}
        {/* <button type='button' onClick={e => fnTab(e, 0)}>Coffee</button>
        <button type='button' onClick={e => fnTab(e, 1)}>Drink</button> */}
      </div>

      {code.map((data, idx) => <ProductContent key={idx} data={data} />)}

    </div>

  )
}
