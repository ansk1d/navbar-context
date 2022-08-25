import React, { useState } from "react";
import Context from '../context/Context';


export default (props) => {
    const [name, setName] = useState('');
    return (
        <div>
            <Context.Provider value={{ name, setName }}>
                {props.children}
            </Context.Provider>
        </div>
    );
}