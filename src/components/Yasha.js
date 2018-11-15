import React, { Component } from "react";
import img from '../assets/images/s-data.png'
import css from './yasha.less';

const yashaSys = [
    { id: '1', name: '亚厦门户-Local', imgurl: 'yasha-local', syshref: '' ,type:1 },
    { id: '2', name: '亚厦门户-Local', imgurl: '', syshref: '' ,type:1 },
    { id: '3', name: '亚厦门户-Local', imgurl: '', syshref: '' ,type:1 }
];

var stores = {
    type:'',
    fivSys:[
        {
            id:'', name:'', imgUrl:'', sysHref:''
        }
    ],
    clickCount:[
        {sysId:'1', count:220},
        {sysId:'2', count:30}
    ]
};

// 本地文件的图片路径
const requireContext = require.context("../assets/images",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

class Sys extends Component {
    handle() {
        const w=window.open('about:blank');
        w.location.href='//www.baidu.com';
    }
    render() {
        const { sys } = this.props;
        return(
            <li className={css.sysbox} title={sys.name} onClick={this.handle}>
                <img src={img} alt="ys" className={css.sysImg} />
                <span className={css.sysName}>{sys.name}</span>
            </li>
        )
    }
}

export default class Yasha extends Component {
    render() {
        return (
            <ul className={css.page}>
                { yashaSys.map((sys) => <Sys key={sys.id} sys={sys}/>) }
            </ul>
        )
    }
}