// Footer.js

function Footer () {
  const stFoot = {
    width:100+'%', height:'auto', borderTop:'1px solid #333'
  };

  return (
    <footer id='footBox' style={stFoot}>
        <h2>company information</h2>
        <address>
          회사 주소
        </address>
        <dl>
          <dt>family site</dt>
          <dd>
            <ul>
              <li>site_01</li>
              <li>site_02</li>
              <li>site_03</li>
            </ul>
          </dd>
        </dl>
      </footer>
  )
}

export default Footer;