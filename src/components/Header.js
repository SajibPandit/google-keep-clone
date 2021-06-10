import React from 'react'
import logo from '../images/download.jpg'
const Header = (props) => {
    return (
        <div className="py-3 bg-info text-center">
                <span><img className="mr-3" src={logo} alt="Google Keep Logo" width="50" height="50"/> Google Keep Clone</span> | Total Notes : {props.length}
        </div>
    )
}

export default Header
