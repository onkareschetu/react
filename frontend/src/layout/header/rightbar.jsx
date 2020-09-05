import React,{Fragment, useState,useEffect} from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import { FileText, LogIn, Mail, User, MessageSquare, Bell, Minimize, MoreHorizontal } from 'react-feather';
import {useHistory} from 'react-router-dom'
import firebase_app from '../../data/base'
const Rightbar = (props) => {

    const history = useHistory();
    const [mobileToggle,setMobiletoggle] = useState(true)
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('')
    
    useEffect(() => {
        setProfile(localStorage.getItem('profileURL' || man));
        setName(localStorage.getItem('Name'))
    },[]);
    
    const logOut = () => {
        localStorage.removeItem('profileURL')
        firebase_app.auth().signOut()   
    }

    const RedirectToChats = () => {
        history.push(`${process.env.PUBLIC_URL}/app/chat-app`)
    }

    const UserMenuRedirect = (redirect) => {
        history.push(redirect)
    }

    const mobileRightToggle = (mobiletoggle) => {
      if (mobiletoggle){
        setMobiletoggle(!mobiletoggle);
        document.querySelector(".nav-menus").classList.add("open");
      }else {
        setMobiletoggle(!mobiletoggle);
        document.querySelector(".nav-menus").classList.remove("open");
      }
    }

    //full screen function
    function goFull() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        }
    }
    return (
        <Fragment>
         <div className="nav-right col pull-right right-menu">
          <ul className="nav-menus">
            <li className="onhover-dropdown">
              <div className="notification-box"><Bell/><span className="badge badge-pill badge-secondary">2</span></div>
              <ul className="notification-dropdown onhover-show-div">
                <li>
                  <p className="f-w-600 font-roboto">You have 3 notifications</p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-primary"> </i>Delivery processing <span className="pull-right">10 min.</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-success"></i>Order Complete<span className="pull-right">1 hr</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-info"></i>Tickets Generated<span className="pull-right">3 hr</span></p>
                </li>
                <li>
                  <p className="mb-0"><i className="fa fa-circle-o mr-3 font-warning"></i>Delivery Complete<span className="pull-right">6 hr</span></p>
                </li>
              </ul>
            </li>
            <li className="onhover-dropdown"><MessageSquare/>
              <ul className="chat-dropdown onhover-show-div p-t-15 p-b-15">
                <li onClick={RedirectToChats}>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/3.jpg")} alt=""/>
                    <div className="status-circle away"></div>
                    <div className="media-body">
                      <span>Erica Hughes</span>
                      <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-warning">58 mins ago</p>
                  </div>
                </li>
                <li onClick={RedirectToChats}>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/2.jpg")} alt=""/>
                    <div className="status-circle online"></div>
                    <div className="media-body"><span>Kori Thomas</span>
                      <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-success">1 hr ago</p>
                  </div>
                </li>
                <li onClick={RedirectToChats}>
                  <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/6.jpg")} alt=""/>
                    <div className="status-circle offline"></div>
                    <div className="media-body"><span>Ain Chavez</span>
                      <p className="f-12 light-font">Lorem Ipsum is simply dummy...</p>
                    </div>
                    <p className="f-12 font-danger">32 mins ago</p>
                  </div>
                </li>
                <li className="text-center"> <a href="#javascript">View All     </a></li>
              </ul>
            </li>
            <li><a className="text-dark" href="#javascript" onClick={goFull}><Minimize/></a></li>
            <li className="onhover-dropdown p-0">
              <div className="media profile-media">
                <img className="b-r-10" src={profile} style={{width:"35px",height:"35px"}} alt=""/>
                <div className="media-body"><span>{name}</span>
                  <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
                </div>
              </div>
              <ul className="profile-dropdown onhover-show-div">
                <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile`)}><User/><span>Account </span></li>
                <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app`)}><Mail/><span>Inbox</span></li>
                <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/todo-app/todo`)}><FileText/><span>Taskboard</span></li>
                <li onClick={logOut}><LogIn/><span>Log Out</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-lg-none mobile-toggle pull-right"><MoreHorizontal onClick={() => mobileRightToggle(mobileToggle)}/></div>  
        </Fragment>

    );
}

export default Rightbar;