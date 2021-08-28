const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = user.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return { error: 'User is already existing' };
    }

    const user = { id, name, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = () => {

}


const getUserInRoom = () => {

}