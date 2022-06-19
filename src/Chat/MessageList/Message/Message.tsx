import React from 'react';
import { messageData } from '../../../types';
import './Message.css';
function Message(props: messageData) {

    return (
        // <div className="Message">
        //     <div className='AuthorName'></div>
        //     <div className='MessageText'>{props.MessageText}</div>

        // </div>
        <div className="chat-message-left pb-4">
            <div>
                <img className="rounded-circle mr-1" src={props.Avatar} alt={props.Avatar} width="40" height="40" />
                <div className="text-muted small text-nowrap mt-2">2:36 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                <div className="fw-bold mb-1 userName">{props.userName}</div>
                {props.MessageText}
            </div>
        </div>

    );
}

export default Message;