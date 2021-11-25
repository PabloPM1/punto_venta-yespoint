import React from 'react'
import "./sidebar.css"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CallIcon from '@material-ui/icons/Call';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import PaymentIcon from '@material-ui/icons/Payment';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';



function Sidebar() {
  
    return (
       
        <div className="sidebar">
            
            
            

                <div className="logo-mini">
                    <b>YES</b>
                
                <span className="logo-lg">
                        PointOs
                </span>
                </div>
                <ul className="nav-links">
                <li className="headerr">menu</li>
               
                    <div className="iocn-link">
                    < a href="#">
                        <PeopleIcon/>
                        <span className="link-name">Info Compra/Venta</span>
                    </a>
                        <i className="" onClick="sub-menu">
                            <ChevronLeftIcon fontSize="small"/>
                        </i>
                        
                    </div>
                        <ul className="sub-menu ">
                            <li><a href="#"><LibraryBooksIcon/>Clientes</a></li>
                            <li><a href="#"><LocalShippingIcon/>Probedores</a></li>
                            <li><a href="#"><LibraryBooksIcon/>Productos</a></li>
                        </ul>
                <div>
                    < a href="#">
                       
                        <ShoppingCartIcon/>
                        <span className="link-name"> Ventas</span>
                    </a>
                    <i className="">
                            <ChevronLeftIcon fontSize="small"/>
                        </i>
                </div>
                <ul className="sub-menu ">
                    <li><a href="#"><ShoppingCartIcon/>Punto de venta</a></li>
                    <li><a href="#"><InsertInvitationIcon/>Rep. Venta</a></li>
                    <li><a href="#"><LibraryBooksIcon/>Rep. Detallado</a></li>
                    <li><a href="#"><AccountBalanceIcon/>Cuentas por cobrar</a></li>
                    <li><a href="#"><BorderHorizontalIcon/>Etiquetas</a></li>
                    </ul>
               
                <div>
                    < a href="#">
                        <CloseIcon/>
                        <span className="link-name">Salir</span>
                    </a>
                    
                </div>
                </ul>
        </div>
        
    );
}

export default Sidebar;

