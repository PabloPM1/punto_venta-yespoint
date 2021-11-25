import React from 'react'
import './header.css'
import './assets/avatarr.png'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DehazeIcon from '@material-ui/icons/Dehaze';


function Header() {
    return (
        <header className="main-header">
            <span className="nav-bar" id="btnMenu"><i className=""><DehazeIcon fontSize="small"/></i></span>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="tutton">
                </a>
                <a href="#" className="btn btn-danger recarga" role="button">
                    <span className="glyphicon glyphicon-phone">

                    </span>
                        <PhoneIphoneIcon/>
                        TAE
                    < span className="glyphicon glyphicon-usd">

                    </span>
                    <span className="saldotae"><AttachMoneyIcon/>
                    0.00
                    </span>
                </a>
                
                
                            
            </nav>

            <li className="opdodrwn user user-menu open">
        
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    
                                    <img src="https://app.yespointos.net/assets/dist/img/avatar5.png" className="user-image" alt="User Image"/>
                        
                                </a>
                                <ul className="dropdown-menu">
                        
                                    <li className="user-header">
                                        <img src="https://app.yespointos.net/assets/dist/img/avatar5.png" className="img-circle" alt="User Image"/>

                                        <p>
                                            admin                                       
                                        </p>
                                    </li>
                                    
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="https://app.yespointos.net/acceso/cuenta" className="btn btn-default btn-flat">cambiar clave</a>
                                        </div>
                                        <div className="pull-right">
                                            <a href="https://app.yespointos.net/acceso/salir" className="btn btn-default btn-flat">Cerrar Sesión</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>

        </header>
    )
}

export default Header
