import React from 'react';

const Home = ({onchangeimg,onclickevent}) => {
    return (<div className="my-5">
                <div className="container">
                    <form className="form">
                        <div className="flex flex-wrap justify-content-center">
                            <input type="text" className="form-control w-50" placeholder="Enter URL" onChange={onchangeimg} />
                            <button type="button" onClick={onclickevent} className="form-control w-20 ml-2 btn btn-primary" name="button"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>);
}

export default Home;