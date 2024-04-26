import "../Bootstrap/bootstrap.css";
import React from 'react';

const { Component } = require("react");

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark p-3">
                        <div><a href="/employees" className="navbar-brand">Employee Management</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;