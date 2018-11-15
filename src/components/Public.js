import React from "react";
import img from '../assets/images/s-hr.png'
import css from './yasha.less';

const yashaSys = [
    { id: '1', name: '亚厦门户-hr', imgurl: 'yasha-local', syshref: '' ,type:1 },
    { id: '2', name: '亚厦门户-hr', imgurl: '', syshref: '' ,type:1 },
    { id: '3', name: '亚厦门户-hr', imgurl: '', syshref: '' ,type:1 }
];

var datas = [
    {
        typeId:'1',
        typeName:'Yasha',
        items:[
            {
                id:'1', name:'', imgUrl:'', sysHref:''
            },
            {
                id:'2', name:'', imgUrl:'', sysHref:''
            },
            {
                id:'3', name:'', imgUrl:'', sysHref:''
            }
        ]
    },
    {
        typeId:'1',
        typeName:'PUBLIC',
    },
];

function Sys(props) {
    let sys = props.sys;
    const handle = () => {
        const w=window.open('about:blank');
        w.location.href='//www.baidu.com';
    };
    return (
        <li className={css.sysbox} title={sys.name} onClick={handle}>
            <img src={img} alt="ys" className={css.sysImg} />
            <span className={css.sysName}>{sys.name}</span>
        </li>
    )
}

function Public() {
    const sysitem = yashaSys.map((sys) => <Sys key={sys.id} sys={sys}/>);
    return (
        <ul>
            {sysitem}
        </ul>
    )
}

export default Public;