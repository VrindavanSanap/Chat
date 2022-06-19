import React from "react";
import './InputBox.css';
import { useState } from "react";


function InputBox(props: any) {
    const [message, setMessage] = useState("");
    return (
        <div className="flex-grow-0 py-3 px-4 border-top" >
            <div className="input-group" >
                <input className="form-control" type="text" value={message} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        props.onSubmit(message);
                        setMessage("");
                    }
                }} onChange={(e) => {
                    setMessage(e.target.value)
                }}
                />
                <button type="button" className="btn btn-primary" onClick={() => {
                    props.onSubmit(message)
                    setMessage("")
                }}>Send</button>
            </div >
        </div>

    );

}
export default InputBox;