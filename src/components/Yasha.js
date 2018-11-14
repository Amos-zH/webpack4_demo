import React, { Component } from "react";
import img from '../assets/images/s-data.png'
import css from './yasha.less';

const yashaSys = [
    { id: '1', name: '亚厦门户-Local', imgurl: '', syshref: '' },
    { id: '1', name: '亚厦门户-Local', imgurl: '', syshref: '' },
    { id: '1', name: '亚厦门户-Local', imgurl: '', syshref: '' }
];

// 本地文件的图片路径
const requireContext = require.context("../assets/images",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

class Sys extends Component {
    render() {
        const { sys } = this.props;
        return(
            <li className={css.sysbox} title={sys.name}>
                <img src={img} alt="aaa" className={css.sysImg} />
                <span className={css.sysName}>{sys.name}</span>
            </li>
        )
    }
}

export default class Yasha extends Component {
    render() {
        return (
            <ul className={css.page}>
                { yashaSys.map((sys) => <Sys sys={sys}/>) }
            </ul>
        )
    }
}