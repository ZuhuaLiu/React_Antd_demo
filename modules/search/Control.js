import React from 'react';
import {connect} from 'react-redux';
import action from '../../actions/search';
//控制Tab页
let Control = ({visible,dispatch})=> {

    function swith_visible(e) {
        dispatch(
            action.setVisible(e.target.innerHTML)
        );
    }

    return <p className="sub-btns">
        {
            ['全部任务', '已完成', '未完成'].map((label, key)=> {
                return <a href="javascript:;" onClick={swith_visible} className={visible === label?'active btn btn-default':'btn btn-default'}
                          key={key}>{label}</a>;
            })
        }
    </p>
}

const mapStateToProps = (state) => {
    return {visible:state.visible};
}


Control = connect(mapStateToProps)(Control);

export default Control;