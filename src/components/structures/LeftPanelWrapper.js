import React, { Component } from 'react';
import { replaceableComponent } from "../../utils/replaceableComponent";

@replaceableComponent("views.login.LeftPanelWrapper")
class LeftPanelWrapper extends Component {
    static displayName = 'LeftPanelWrapper';
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default LeftPanelWrapper;
