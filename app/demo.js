import React, { Component } from 'react';
import dt from './demo.json';

class Hello extends Component {     //组件名首写字母必须大写
    render() {
        return (
            <div>
                {dt.word}
            </div>
        );
    }
}

export default Hello