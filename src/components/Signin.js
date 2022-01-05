import React from 'react';

const Signin = ({onChangeRoute}) => {
    return (<div className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 center" style={{border:'1px solid gray'}}>
                            <div className="p-3 text-center">
                                <p className="h1 pb-3 mb-5 text-danger">Login Now</p>
                                <hr/>
                                <div className="py-3">
                                    <div className="row form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="E-Mail"/>
                                    </div>
                                    <div className="row form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="center">
                                    <button type="button" className="btn btn-success px-5" name="button"
                                    onClick={() => onChangeRoute('home')}> Submit </button>
                                </div>

                                <div className="center mt-3">
                                    <p className="pointer" onClick={() => onChangeRoute('signup')}> Click To Sign Up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}

export default Signin;