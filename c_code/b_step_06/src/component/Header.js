// Header.js

function Header() {
  const myName = 'react';
  const h1Style = {color:'#f50', textTransform:'uppercase'}

  return (
    <header id="headBox">
      <h1 style={h1Style}>Hello World</h1>
      <p style={{color:'#fa0'}}>{myName}란</p>
    </header>
  )
}

export default Header;