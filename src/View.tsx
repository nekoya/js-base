import * as React from 'react';

export interface HelloViewProps {}

export function HelloView(_: HelloViewProps): JSX.Element {
    return (
        <h1>Hello react!</h1>
    );
}
(HelloView as React.StatelessComponent<HelloViewProps>).propTypes = {};