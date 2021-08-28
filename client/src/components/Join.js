import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container">
            <div className="inner">
                <h1>Join</h1>
                <div><input placeholder="name" className="join-input" type="text" onChange={(event) => setName(event.target.value)}></input></div>
                <div><input placeholder="room" className="join-input" type="text" onChange={(event) => setRoom(event.target.value)}></input></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join-button" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;