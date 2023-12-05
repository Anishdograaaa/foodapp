import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                login:"Dummy",
                type:"acx",
            }
        }
        
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Anishdograaaa")
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        });
    
            }
    render(){
        const { login,type } = this.state.userInfo;
        
        return (
        
            <div className="user-card">
                <h1>{login}</h1>
                <h1>{type}</h1>
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        );
    }
}
export default UserClass;