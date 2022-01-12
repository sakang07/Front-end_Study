// ProductLi.js

import React from 'react'

export default function ProductLi(props) {
  const pr = props.data;

  return (
    <li>
      <dl>
        <dt>{pr.product}</dt>
        <dd>{pr.narr}</dd>
      </dl>
    </li>
  )
}
