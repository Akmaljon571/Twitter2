import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './header.scss' 

function Header() {
    let navigate = useNavigate();
    let storage = JSON.parse(window.localStorage.getItem('login'))
    let em = useRef()
    let inp = useRef()
    if (storage == []) {
        navigate('../login', {replace: true})
        return
    }
    if (storage == null) {
        navigate('../login', {replace: true})
        return
    } 


    let log = (evt)=>{
        evt.preventDefault()
       storage.map((key)=>{
           if (em.current.value == key.userName && inp.current.value == key.password) {
               navigate('../home', {replace: true})
           } 

            if (em.current.value !== key.userName) {
               em.current.classList += 'login-username pastHato'
            }  else if (em.current.value == key.userName) {
                em.current.classList = 'login-username'
            }
            
            if (inp.current.value !== key.password) {
                inp.current.classList += 'login-password pastHato'
            } else if (inp.current.value == key.password) {
                inp.current.classList = 'login-password '
            }
       })
    }
    


    return (
        <header className="header">
            <form className="login-form">
            <p className="login-text">
                <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-lock fa-stack-1x"></i>
                </span>
            </p>
            <input ref={em} type="text" className="login-username"  required placeholder="Name" />
            <input ref={inp} type="password" className="login-password" required placeholder="Password" />
              
                <input type="submit" onClick={log} name="Login" value="Log in" className="login-submit" />
               <Link to='/login'>
                <input type="submit" name="Login" value="Ro'yhatdan otish" className="login-submitcha" />
               </Link>
            </form>
            <Link to="/login" className="login-forgot-pass">forgot password?</Link>
            <div className="underlay-photo"></div>
            <div className="underlay-black"></div> 
        </header>
    )
}

export default Header