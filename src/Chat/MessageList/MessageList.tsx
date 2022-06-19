import React, { useEffect } from 'react';
import './MessageList.css';
import Message from './Message/Message';

function MessageList(props: any) {

    const renderList = () => {

        return props.Messages.map((message: string) => {
            return <Message CreationDate={new Date()} MessageText={message} Avatar={"https://picsum.photos/200/300/?random&t=" + new Date().getTime() + ""} userName={"Cameron Winklewoss"} key={message} />
        }
        );
    }

    return (

        <div className="position-relative">
            <div className="chat-messages px-4">

                {renderList()}
            </div>
        </div>
    );
}

export default MessageList;