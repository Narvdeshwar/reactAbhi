import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0,
        }
    }
    render(){
        return(
            <div className="user-card">
                <h1>{this.state.count}</h1>
        <h1>Name : {this.props.name} </h1>
        <h2>Address : Aydhya</h2>
        <h3>abhsihek@gmail.com</h3>
        </div>
        )
    }
}
export default UserClass