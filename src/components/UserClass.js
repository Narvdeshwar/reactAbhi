import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           userInfo:{
            name:"dummy",
            location:"defaults"
           }
        }
    }
 async componentDidMount(){
  const data = await fetch("  https://api.github.com/users/abhi2J4")
  const json = await data.json()
  this.setState({
    userInfo:json
  })
}
componentWillUnmount (){
    console.log("components did unmount")
}

    render(){
        const {name,id} =this.state.userInfo
    
        return(
            <div className="user-card">
    
        <h1>Name : {name} </h1>
        <h2>id :{id}</h2>
        <h3>abhsihek@gmail.com</h3>
        </div>
        )
    }
}
export default UserClass