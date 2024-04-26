import "../Bootstrap/bootstrap.css";
import React from 'react';

const { Component } = require("react");

class FooterComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <footer className="footer">
                    <span>All Rights Reserved 2024</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;