import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    componentDidMount(){
console.log("parent mount")
    }
    render(){

        return (
            <div>
                <h1>This is About</h1>
                
                <UserClass name={"Anish class"} location={"Ambala city"}/>
            </div>
        );
    }
}


export default About;