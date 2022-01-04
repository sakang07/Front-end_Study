// Review.js
import React, {useState, useEffect} from 'react';
import '../style/Review.scss';
import axios from 'axios';

export default function Review() {
  const [review, setReview] = useState('글자를 입력하세요');
  const fnReviewChange = e => {setReview(e.target.value)};

  useEffect(() => {
    console.log(review);
  }, [review]);

  {
  // useEffect( async () => {
  //   // fetch('./data/dataSample.json')
  //   // .then(res => res.json() )
  //   // .then(console.log);   
    
  //       const resolve = await fetch('./data/dataSample.json');
  //       const data    = await resolve.json();
  //       console.log( data );
  // }, [])
  }

useEffect( async () => {
  const response = await axios.get('./data/dataSample.json');
  const dataResult = await response.data;
  console.log(dataResult);
}, [])

  // useState() : 변경될 내용을 간편하게 적용하기 위한 API
  // useEffect() : 상태체크(변화시 어떤 기능인지 확인 체크). fetching

  return (
    <div className="review_area">
      <form method="POST" action="#">
        <fieldset>
          <legend>리뷰 작성</legend>
          <input id="reviewText" name="review__Text" 
          onChange={fnReviewChange} />
          <p>{review}</p>
        </fieldset>
      </form>
    </div>
  )
}