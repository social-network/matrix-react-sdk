
import React from 'react';
import { _t } from "../../../languageHandler";
import * as sdk from "../../../index";
import PropTypes from "prop-types";
import { ValidatedServerConfig } from "../../../utils/AutoDiscoveryUtils";
import AccessibleButton from "../elements/AccessibleButton";
import { replaceableComponent } from "../../../utils/replaceableComponent";

@replaceableComponent("views.auth.JWTLogin")
export default class JWTLogin extends React.Component {
    static displayName = 'JWTLogin';

    static propTypes = {
        onJWTLogin: PropTypes.func.isRequired,
        onEditServerDetailsClick: PropTypes.func.isRequired,
    };

    render() {
        const SignInToText = sdk.getComponent('views.auth.SignInToText');

        return <div>
            <SignInToText serverConfig={this.props.serverConfig}
                onEditServerDetailsClick={this.props.onEditServerDetailsClick} />
            <div>Pass jwtToken to this.props.onJWTLogin</div>

            <AccessibleButton
                style={{
                    color: '#fff',
                    backgroundColor: '#03b381'
                }}
                className="mx_Login_sso_link mx_Login_submit mx_AccessibleButton mx_AccessibleButton_hasKind mx_AccessibleButton_kind_primary "
                disabled={this.props.isSyncing || this.props.busyLoggingIn}
                onClick={this.props.onJWTLogin}
            >
                {'Sign with jwt'}
            </AccessibleButton>
        </div>;
    }
}
