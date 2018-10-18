import React, {Component} from 'react';
import dt from './demo.json';

class hello extends Component {
    render() {
        return (
            <div>
                { dt.word }
            </div>
        );
    }
}

export default hello