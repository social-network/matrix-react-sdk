import React, { Component } from 'react'
import { replaceableComponent } from "../../utils/replaceableComponent";

@replaceableComponent("views.login.GlobalPage")
class GlobalPage extends Component {
    static displayName = 'GlobalPage';
    render() {
        return (
            <div>
                GlobalPage
            </div>
        )
    }
}

export default GlobalPage
