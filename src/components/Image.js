import React from 'react';

const Home = ({img}) => {
    return (<div className="my-5">
                <div className="container justify-content-center">
                    <img alt='' src={img}/>    
                </div>
            </div>);
}

export default Home;