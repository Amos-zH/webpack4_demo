import React, { Component } from 'react';
import dt from './component.json';
import css from './demo.less'

class Hello extends Component {     //组件名首写字母必须大写
    render() {
        return (
            <div className={css.word}>
                {dt.word}
                <h3 className={css.test}>title</h3>
            </div>
        );
    }
}

export default Hello