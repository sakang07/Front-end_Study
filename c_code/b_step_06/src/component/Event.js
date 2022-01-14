// Event.js

import React, {useEffect, useState} from 'react';
import {MdExpandMore} from 'react-icons/md';
import axios from 'axios';
import EventLi from './EventLi';
import '../style/Event.scss';

export default function Event() {
  const plusN = 5;
  const [dataList, setDataList] = useState([]);
  const [num, setNum] = useState(5);

  const dataUrl = './data/eventList.json';

  useEffect(() => {
    // axios.get(dataUrl)
    //   .then(res => setDataList(res.data));
    (async () => {
      const res = await axios.get(dataUrl);
      setDataList(res.data);
    })()
  }, [])

  const fnPlusNum = () => {
    setNum(num + plusN);
  };
  const viewData = dataList.filter((data, i) => i < num);

  return (
    <div className='event_area'>
      <h2>Event</h2>
      <ul>
        {viewData.map((view, idx) =>
          <EventLi key={idx} data={view}/>)}
      </ul>

      <div className='more_btn'>
        <button type='button' onClick={fnPlusNum}>
          <MdExpandMore />
          <span className='blind'>더보기</span>
        </button>
      </div>
    </div>
  )
}
