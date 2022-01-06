import { NavLink } from "react-router-dom";

export default function Navigation (){
  // const navList = ['list1', 'list2', 'list3'];
  const navList = [
    {content: "Main", href: "/"},
    {content: "Review", href: "/review"},
    {content: "CardList", href: "/cardList"}
  ];

  return (
    <nav id="navBox">
        <h2 className="blind">navigation</h2>
        <ul>
          { navList.map( (nav, idx)=>{
            return (
            <li key={idx}>
              <NavLink 
                  className={({isActive}) => 'box' + ' ' + (isActive ? 'on' : '') } // className의 default값인 active를 on으로 바꾸고 box 추가
                  to={nav.href}>{nav.content}</NavLink>
            </li>
            )
          }) }
        </ul>
      </nav>
  )
}