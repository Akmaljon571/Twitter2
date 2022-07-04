import Logo from '../img/Frame131.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './navbar.scss'

const Navbar = () =>{
    let storage = JSON.parse(window.localStorage.getItem('login'))
    let navigate = useNavigate()

    const [rasmcha, setRasmcha] = useState('');
 
    console.log(rasmcha);

    if (storage == []) {
        navigate('../login', {replace: true})
    }
    if (storage == null) {
        navigate('../login', {replace: true})
        
    } 

    useEffect(() => {
        storage.forEach(key => {
            setRasmcha(key.rasm)
        })
    }, []);


    let kattaH = (child) =>{
        let aray = []
        for (let key of child.split(" ")) {
            aray.push(key.replace(key.charAt(0), key.charAt(0).toUpperCase()));
        }
        return aray
    }
 

    return(
       <nav className="nav">
          <img src={Logo} className = 'nav_logo' alt="Kompany logo" />
          <ul className="nav_list">
             <li className="nav_item">
                <NavLink to='/' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-house-door" viewBox="0 0 16 16">
                     <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                <p className="nav_text">{kattaH("home")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Explore' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                    <p className="nav_text">{kattaH("explore")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Notifications' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
                    <p className="nav_text">{kattaH("Notifications")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Messages' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                    <p className="nav_text">{kattaH("Messages")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Bookmarks' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-bookmark" viewBox="0 0 16 16">
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                    <p className="nav_text">{kattaH("Bookmarks")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Lists' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                </svg>
                    <p className="nav_text">{kattaH("Lists")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/Profile' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-person" viewBox="0 0 16 16">
                     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                    <p className="nav_text">{kattaH("Profile")}</p>
                </NavLink>
             </li>
             <li className="nav_item">
                <NavLink to='/More' className={({isActive})=> isActive ? 'nav_link_active' : 'nav_link'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="nav_svg bi bi-filter-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                </svg>
                    <p className="nav_text">{kattaH("More")}</p>
                </NavLink>
             </li>
          </ul>
          <button type='submit' className="nav_button">
            Tweet
          </button>
                {storage.map((key)=>(
                  <div key={key.id} className="nav_prof">
                    <img className='nav_prof_img' width='48' height='48' src={rasmcha} alt="User Image" />
                    <h2 className="nav_name">{kattaH(key.userName)}</h2>
                    <p className="nav_email">{kattaH(key.email)}</p>
                   </div>
                ))}
       </nav>
    )
}

export default Navbar