// ContentBox.js

function ContentBox () {
  const myName = 'react';
  
  return (
    <section id="ContentBox">
      <dl>
        <dt>{myName} 커리큘럼</dt>
        <dd>{myName} 내용</dd>
      </dl>
    </section>
  )
}

export default ContentBox;