import React from 'react';

const Navigation = ({isSignIn, onChangeRoute}) => {
    console.log("navigation = "+isSignIn);
    if (isSignIn) {
    return (<div className="bg-light">
                <nav className="navbar">
                    <div className="container">
                        <p className="navbar-brand">Logo</p>
                        <div className="">
                            <ul className="d-flex align-content-end">
                                <li className="nav px-2">
                                    <p onClick={() => onChangeRoute('singout')} className="nav-link pointer">Sign Out</p>
                                </li>  
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>);
    } else {
        return (
            <div className="bg-light">
                <nav className="navbar">
                    <div className="container">
                        <p className="navbar-brand">Logo</p>
                        <div className="">
                            <ul className="d-flex align-content-end">
                                <li className="nav px-2">
                                    <p onClick={() => onChangeRoute('signin')} className="nav-link pointer">Sign In</p>
                                </li>
                                <li className="nav px-2">
                                    <p onClick={() => onChangeRoute('signup')} className="nav-link pointer">Sign Up</p>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>)
    }
}

export default Navigation;