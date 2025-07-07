import { useEffect, useState } from "react";

const Users = ({name})=>{

   

    const [count,setCount] = useState(0);

     useEffect(()=>{

    },[count])
    
    const [count1] = useState(1);
    return (
        <>
        <div className="user-card">
            <h1>Count : {count}</h1>
            
            <button onClick={()=>{setCount(count + 1);
            }}>Search Increase</button>

            {/* <h1>Count1 : {count1}</h1> */}
        <h1>Name : {name}</h1>
        <h2>Address : Aydhya</h2>
        <h3>abhsihek@gmail.com</h3>
        </div>
        </>
    )
}
export default Users;