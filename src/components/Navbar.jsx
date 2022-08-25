import React, {useContext} from "react";
import Context from '../context/Context';
import styles from './style.css';


export default ()=>{
    const context =useContext(Context)
    return(
        <div className="nav">
            <h1 className="greater">Hi {context.name}</h1>
        </div>
    );
}