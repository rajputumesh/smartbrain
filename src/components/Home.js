import React from 'react';

const Home = ({onchangeimg,clickfunction}) => {
    return (<div className="my-5">
                <div className="container">
                    <div className="w-100">
                        <div className="flex w-70 center">
                            <input type="text" className="form-control w-70" placeholder="Enter URL" onChange={onchangeimg} />
                            <button type="button" onClick={clickfunction} className="form-control w-30 ml-2 btn btn-primary" name="button"> Submit </button>
                        </div>
                    </div>
                </div>
            </div>);
}

export default Home;