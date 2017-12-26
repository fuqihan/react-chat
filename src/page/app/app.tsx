import * as React from 'react';

export interface Props {
    name: string;
}
class App extends React.Component<Props, object> {
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

export default App;