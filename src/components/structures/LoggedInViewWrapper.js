import React, { Component } from 'react';
import { replaceableComponent } from "../../utils/replaceableComponent";

@replaceableComponent("views.login.LoggedInViewWrapper")
class LoggedInViewWrapper extends Component {
    static displayName = 'LoggedInViewWrapper';
    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.props.children}
            </div>
        );
    }
}

export default LoggedInViewWrapper;
