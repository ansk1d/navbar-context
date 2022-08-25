import React, { useState, useContext } from "react";
import Context from "../context/Context";
import styles from './style.css';



export default () => {
    const { name, setName } = useContext(Context);

    const onChangeHandler=(e) =>{
        setName(e.target.value);
    }

    return(
        <div>
            <p className="txt">Enter your Name</p>
            <form >
            <input className="input" type="text" name="name" value={name} onChange={onChangeHandler} />
            </form>
        </div>
    );
}