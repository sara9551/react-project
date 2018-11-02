import axios from "axios";

// GET route for getting all of the posted chores
export const getList = () => {
    return axios
    .get("http://localhost:3000/api/chore", {
        headers: {"Content-Type": "application/json"}
})
.then(res => {
    return res.data,
    console.log(res.data);
})
}

// POST route for saving a new chore/task
export const addList = chore => {
    return axios
    .post("http://localhost:3000/api/chore", 
    {title: chore},
    {
        headers: {"Content-Type": "application/json"}
})
.then(res => {
    console.log(res);
})
}

// DELETE route for deleting chores
export const deletechore = () => {
    axios
    .delete(`http://localhost:3000/api/chore${chore}`, {
        headers: {"Content-Type": "application/json"}
})
.then(res => {
    console.log(res);
})
}