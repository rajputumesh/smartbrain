import React from 'react';

const Navigation = () => {
    return (<div className="bg-light">
                <nav className="navbar">
                    <div className="container">
                        <p className="navbar-brand">Logo</p>
                        <div className="">
                            <ul className="d-flex align-content-end">
                                <li className="nav px-2">
                                    <p className="nav-link pointer">Home</p>
                                </li>
                                <li className="nav px-2">
                                    <p className="nav-link pointer">Log In</p>
                                </li>
                                <li className="nav px-2">
                                    <p className="nav-link pointer">Sign In</p>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>);
}

export default Navigation;