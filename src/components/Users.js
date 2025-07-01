import { useState } from "react";

const Users = ({name})=>{


    const [count] = useState(0);
    return (
        <>
        <div className="user-card">
            <h1>Count : {count}</h1>
        <h1>Name : {name}</h1>
        <h2>Address : Aydhya</h2>
        <h3>abhsihek@gmail.com</h3>
        </div>
        </>
    )
}
export default Users;