import React, { Component } from 'react';

export default class NavBar extends Component {

    isActive(stage) {
        return this.props.active === stage? 'active': '';
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li
                            className={ this.isActive('authData') }>
                            <a>Authentication</a>
                        </li>
                        <li
                            className={ this.isActive('personalData') }>
                            <a>Personal Data</a>
                        </li>
                        <li
                            className={ this.isActive('sendData') }>
                            <a>Send Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
