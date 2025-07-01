import UserClass from "./UserClass";
import Users from "./Users";

const About = () =>{
    return(
        <div>
            <h1>about Page</h1>
           <Users name ={"Abhishek (function)"}/>
           <UserClass name = {"Abhsihek (class)"}/>
        </div>
    )
}

export default About;
