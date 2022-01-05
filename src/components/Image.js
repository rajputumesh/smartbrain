import React from 'react';

const Home = ({img}) => {
    return (<div className="w-70 my-5 center">
                <div className="w-100">
                    <img alt='' src={img}/>    
                </div>
            </div>);
}

export default Home;