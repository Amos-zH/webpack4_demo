import React, { Component } from "react";
import img from '../assets/images/s-data.png'
import css from './yasha.less';

export default class Yasha extends Component {
    render() {
        return (
            <div className={css.page}>
                <div className={css.sysbox} title='亚厦门户-Local'>
                    <img src={img} alt="aaa" className={css.sysImg} />
                    <span className={css.sysName}>亚厦门户-Local</span>
                </div>
                <div className={css.sysbox}>
                    <img src={img} alt="aaa" className={css.sysImg} />
                    <span className={css.sysName}>亚厦门户-Local</span>
                </div>
                <div className={css.sysbox}>
                    <img src={img} alt="aaa" className={css.sysImg} />
                    <span className={css.sysName}>亚厦门户-Local</span>
                </div>
                <div className={css.sysbox}>
                    <img src={img} alt="aaa" className={css.sysImg} />
                    <span className={css.sysName}>亚厦门户-Local</span>
                </div>
            </div>
        )
    }
}