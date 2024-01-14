import axios from "./axios";

async function fetchUsers() {
    return await axios.get('/user');   
}

async function fetchUser({ id }: { id: number }) {
    return await axios.get(`/user/${id}`);   
}

exports = {
    fetchUsers,
    fetchUser
}