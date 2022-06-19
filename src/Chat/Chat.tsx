import React from 'react';
import './Chat.css';
import MessageList from './MessageList/MessageList';
import InputBox from './InputBox/InputBox';
import { db } from '../Firebase/Firebase';
import { collection, getDocs, addDoc, onSnapshot, doc, query } from "firebase/firestore";
import { useEffect } from 'react';
import { auth } from '../Firebase/Firebase';
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import axios from 'axios'
function Chat() {
    console.log("Chat");
    console.log(auth.currentUser)
    const [Messages, setMessages] = React.useState<string[]>([]);
    const currentUser = auth.currentUser;

    const getUserName = () => { }


    const saveUser = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                uid: auth.currentUser.uid,
                creationDate: auth.currentUser.metadata.creationTime,
                userName: getUserName()

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {

        const q = query(collection(db, "messages"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messagesArray: any[] = []
            querySnapshot.forEach((doc) => {
                messagesArray.push(doc.data().message);
            });
            setMessages(messagesArray);
        });

        signInAnonymously(auth)
            .then(() => {

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });

    }, []);
    const validateMessage = (message: string) => {
        if (message.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    const onSubmit = async (message: string) => {
        if (validateMessage(message)) {
            try {
                const docRef = await addDoc(collection(db, "messages"), {
                    message: message,
                    creationDate: new Date(),
                    userName: "Cameron Winklewoss"

                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }



        } else {
            alert("Please enter a message");
        }

    }
    return (
        <div className="Chat">
            <MessageList Messages={Messages} />
            <InputBox onSubmit={onSubmit} />
        </div>
    );
}

export default Chat;

