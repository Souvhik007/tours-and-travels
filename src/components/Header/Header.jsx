import React,{ useRef, useEffect} from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]

const Header = () => {

const headerRef = useRef(null)

const stickyHeaderFunc = () =>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add("sticky__header")
    } else{
      headerRef.current.classList.remove("sticky__header")
    }
  })
}

useEffect(()=>{
  stickyHeaderFunc()
  return window.removeEventListener('scroll',stickyHeaderFunc)
})


  return (
   <header className="header" ref={headerRef}>
  <Container>
  <Row>
   <div className="nav__wrapper d-flex align-items-center justify-content-between w-100">
    {/*============= Logo =============*/}
    <div className='logo'>
      <img src={logo} alt=""/>
    </div>
     {/*==============Logo end==============*/}

     {/*=============menu start=============*/}
     <div className="navigation">
      <ul className="menu d-flex align-items-center gap-5">
          {
            nav__links.map((item,index)=>(
              <li className="nav__item" key={index}>
                <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
              </li>
            ))}
      </ul>
     </div>

     {/*=============menu end===============*/}

     <div className="nav__right d-flex align-items-center gap-3" >
      <div className="nav_btns d-flex align-items-center gap-3">
         <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
         <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
      </div>
      <span className="mobile__menu">
      <i class="ri-menu-line"></i>
      </span>
     </div>
   </div>
  </Row>
  </Container>
  </header>
);
};
export default Header;