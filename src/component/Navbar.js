import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Navbar (props){
  // const menuList = ["Women Women", "Man", "Baby", "Kids", "H&M HOME", "Sport", "Sale"];
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  function login (){
    if (props.authenticate == false){
      navigate('/login');
    } else if (props.authenticate == true) {
      navigate('/');
      props.setAuthenticate(false);
      props.setLoginBtn("로그인");
    }
  }

  function search (event){
    if (event.key == "Enter"){
      let searchValue = event.target.value;
      navigate(`/?q=${searchValue}`)
    }
  }

  return (
    <div>
      <div className='side-menu-bar' style={{width: width}}>
        <FontAwesomeIcon icon={faXmark} className='close-btn' onClick={() => { setWidth(0) }}/>
        <div className='side-menu-box'>
          {menuList.map((item, index) => {
            return <a href='#' key={index} className='side-menu-list'>{item}</a>
          })}
        </div>
      </div>
      <div className='login-bar'>
        <FontAwesomeIcon icon={faBars} className='mobile-menu-icon' onClick={() => { setWidth(200) }}/>
        <div className='login-box'>
          <FontAwesomeIcon icon={faUser} className='user-icon'/>
          <div className='login-btn' onClick={() => {login()}}>
            {/* {props.authenticate ? (
            <div onClick={() => props.setAuthenticate(false)}>
              <span style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
            ) : (
            <div onClick={() => navigate("/login")}>
              <span style={{ cursor: "pointer" }}>로그인</span>
            </div>
            )} */}{props.loginBtn}
          </div>
        </div>
      </div>
      <div className='logo-bar'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png" onClick={() => { navigate('/') }}/>
      </div>
      <div className='menu-bar'>
        <div className='menu-box'>
          {menuList.map((item, index) => {
            return <a href='#' key={index} className='menu-list'>{item}</a>
          })}
        </div>
        <div className='search-box'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
          <input type='text' className='search-input' placeholder='제품검색' onKeyDown={(event) => { search(event) }} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;