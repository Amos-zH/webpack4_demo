import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Yasha from './components/Yasha';
import Public from './components/Public';
import css from './index.less'

class Hello extends Component {     //组件名首写字母必须大写
    render() {
        return (
            <div className={css.btnBox}>
                <div className={css.TopBar}>
                    <Link to="/" className={css.aaa}>YASHA</Link>
                    <Link to="/subpage" className={css.aaa}>PUBLIC</Link>
                </div>
                <Route exact path="/" component={Yasha} />
                <Route exact path="/subpage" component={Public} />
            </div>
        );
    }
}

export default Hello