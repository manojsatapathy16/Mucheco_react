import { useState, useLayoutEffect } from 'react';
import './style.css';
import { CallApi_Without_Token } from '../../Services/Client';
import { API } from '../../Services/Apis';

function AdminLogin() {
  const inputs={username:'',password:''};
  const [inputData,setinputData]=useState(inputs);
 const [isLoginClicked,setIsLoginClicked]=useState(false);
 const [isLogin,setIsLogin]=useState(false);

//  api calls
useLayoutEffect(() => {
    if(compairData==1){
        setIsLogin(true)
      }
}, [])
const fetchInfo = async () => {
    var formdata = new FormData();
    formdata.append("username", inputData.username);
    formdata.append("password", inputData.password);
    const data = await CallApi_Without_Token('POST', API.ADMINLOGIN, formdata)
    // setLoading(false)
    if (data.status === 1) {
        // setIsSuccess(data)
        setIsLogin(true);
        setIsLoginClicked(false);
        localStorage.setItem('credential', JSON.stringify("1"));
        window.location='';
        // setLoading(false)
    } else {
        // setLoading(false)
    }
}
const compairDataString = localStorage.getItem("credential");
  const compairData = JSON.parse(compairDataString);

  const loginHandler = () =>{
    setIsLoginClicked(true);
  }
  const logoutHandler = () =>{
    setIsLoginClicked(false);
    setIsLogin(false);
    localStorage.removeItem('credential');
    window.location='';
  }
  const modalClose = () => {
    setIsLoginClicked(false);
  }
  const inputHandleChange = (e) => {
    setinputData({...inputData,[e.target.name]:e.target.value})
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    fetchInfo();
    
  }
  



  return (
    <>
    <div className="header">
      <div className="menu_list">
    
        <div>
        {(!isLogin) ? <span onClick={loginHandler} className="login_header">Admin Login</span> : (<span onClick={logoutHandler} className="login_header">Logout</span>)}
        </div>
        {(!isLoginClicked)?'':<div className="login_modal">
          <form action="" onSubmit={handleLoginSubmit} >
            <h4>LogIn</h4>
            <button className='close_btn' onClick={modalClose} type='submit'>x</button>
            <div>
            <label htmlFor="">User Name</label>
            <input type="text" name='username' placeholder='Enter user Name' value={inputData.username}
          onChange={inputHandleChange}/>
            </div>
            <div>
            <label htmlFor="">Password</label>
            <input type="password" name='password' placeholder='Enter Password' value={inputData.password}
          onChange={inputHandleChange}/>
            </div>
            <button className='login_submit btn' type='submit'>Submit</button>
          </form>
        </div>}
        
        

      </div>
    </div>
    </>
  );
}

export default AdminLogin;
