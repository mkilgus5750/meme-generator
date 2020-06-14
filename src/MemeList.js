import React, { Component } from "react";
import "./MemeList.css";

export default class MemeList extends Component {
    render(){
        return(
            <div className="MemeList">{this.props.children}</div>
        
        )
    }
}