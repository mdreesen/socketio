import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const endpoint = 'localhost:3000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        console.log('location', location.search);
        console.log(name, room);

        socket = io(endpoint);

        setName(name);
        setRoom(room);

        console.log(socket);
        socket.emit('join', { name, room });

        return () => {
            socket.emit('disconnect');
            socket.off();
        } 
    }, [endpoint, location.search])
    
    return (
        <div>Chat</div>
    );
}

export default Chat;