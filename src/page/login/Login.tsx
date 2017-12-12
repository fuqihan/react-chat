import * as React from 'react';
import './Login.scss';

export interface Props {
    name: string;
}
class Login extends React.Component<Props, object> {
    render() {
        return (
            <div className="login">
                login
            </div>
        )
    }
}

export default Login;