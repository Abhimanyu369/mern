import React from 'react';
import {API} from "../backend";
import Base from "./Base";

const Home = () => {
    console.log("Api: ", API)
    return ( 
        <Base>
            <div>
                Home
            </div>
        </Base>
    );
}
 
export default Home;