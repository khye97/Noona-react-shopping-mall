import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Login (props){
  let navigate = useNavigate();

  function loginUser (event){
    event.preventDefault();
    props.setAuthenticate(true);
    props.setLoginBtn("로그아웃")
    navigate('/');
  }


  return (
    <div className='login-page'>
      <form className='login-page-box' onSubmit={(event) => { loginUser(event) }}>
        <div className='email-box'>
          <label for="email">Email address</label>
          <input type='text' id="email" placeholder='Enter email'  pattern='[a-z0-9.%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' title='이메일 형식이 올바르지 않습니다'/>
        </div>
        <div className='password-box'>
          <label for="password">Password</label>
          <input type='password' id="password" placeholder='Password' />
        </div>
        <Button variant="danger" type='submit' className='login-page-btn'>Login</Button>
      </form>
    </div>
  )
}

export default Login;