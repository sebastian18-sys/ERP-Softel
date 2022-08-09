import React, { useRef } from 'react'
import "./navbar.scss"
import { MdNotificationsNone, MdMenu, MdOutlineKeyboardArrowDown, MdOutlineExitToApp } from "react-icons/md"
import { useDetectClick } from '../../hooks/useDetectClick'
import { useStateValue } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import ButtonDarkMode from '../buttonDarkMode';
// import { useNotification } from '../../hooks/useNotification';


export default function Navbar() {

    const [{}, dispatch] = useStateValue();
    const navigate = useNavigate()

    const saved = JSON.parse(localStorage.getItem('user'));
    const getUserLS = saved[0]

    // const [userState, setUserState] = useLocalStorage("user", user)
    
    

    // NOTIFICATIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    // const { notifications } = useNotification()
    // console.log(notifications)

    // Get server socket
    // 0. create state -> const [notifications, setNotifications] = useState([])
    // -> const [open, setOpen] = useState(false)
    // 1. Destructuring Navbar({ socket: state })
    // 2. effect
    // useEffect(() => {
    //  socket.on("getNotification", data => {
    //       setNotification((prev) => [...prev], data)
    // }) 
    // }, [socket])
    // 3. Mannagement handleRead
    // const handleRead = () => {
        //  setNotifications([])
        // setOpen(false) 
    // }

    // console.log(notifications)

    // const displayNotifications = ({ senderName, type}) => {
    //  let actions;
    //  if(type===1) {
    //      action="liked" 
    // } else {
    //      action="commented" 
    // } else {
    //      action="shared" 
    // }
    // return (
    //      <span className="notify">{`${senderName} ${action} your post`}</span> 
    // )
    // }

    const dropdownRef = useRef(null);
    const [active, setActive] = useDetectClick(dropdownRef, false)
    
    const handleClick = () => {
        setActive(!active)
    }

    const handleSignOut = () => {
        dispatch({
            type: 'LOGOUT',
            user: null
        })
        localStorage.removeItem("user")
        navigate("/login", {replace: true})
    }

    return (
        <nav className='navbar'>
            <div className='navbar__wrapper'>
                <div className='navbar__menu'>
                    <MdMenu />
                </div>
                <div className='navbar__items'>
                    <ButtonDarkMode />
                    <div className='navbar__items--item'>
                        {/* put onClick={() => setOpen(!open)} */}
                        <MdNotificationsNone />
                        <span className='item--counter'>1</span>
                        {/* put in <span> {notifications.length} */}
                        {/* add element <button className="nButton" onClick={handleRead}>Mark as read</button> */}
                    </div>
                    {/* {open && (
                        <div className='notifications'>
                            {notifications.map(n => displayNotification)}
                        </div>
                        )
                    } */}

                    <div className='navbar__items--item'>
                        <div className='item__usuario'>
                            <img 
                                className='item--avatar'
                                // src='https://i.ibb.co/7yBdxZ6/Whats-App-Image-2022-07-29-at-1-54-25-AM.jpg'
                                src={`https://unavatar.io/${getUserLS.nombre_usuario}`}
                                alt='avatar'
                                loading='lazy'
                            />   
                            <span>{(getUserLS.nombre_usuario).charAt(0).toUpperCase()+(getUserLS.nombre_usuario).slice(1)}</span>
                            <div className='dropdown'>
                                <button className='dropdown__container' onClick={handleClick}>
                                    <MdOutlineKeyboardArrowDown />
                                </button>
                                <nav
                                    ref={dropdownRef}
                                    className={`menu ${active ? "active" : "inactive"}`}
                                >
                                    <ul>
                                        <li onClick={handleSignOut}>
                                            <MdOutlineExitToApp />
                                            <span>Cerrar sesión</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
