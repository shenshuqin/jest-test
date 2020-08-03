import React ,{Component} from 'react';
import '../style.less'


class UndoLiist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const {list, deleItem, changeStatus,handleBlur, valueChange }= this.props;
        return (
            <div className="undo-list">
                <div className="undo-list-title">
                    正在进行
                    <div id="count" className="undo-list-count">{list.length}</div>
                </div>
                
                <ul className="undo-list-ul">
                    {
                        list.map((item,index)=>{
                        return (<li id="list" key={index} className="undo-list-item" onClick={()=>{changeStatus(index)}}>
                            {
                                item.status === 'div' ? item.value : (
                                <input 
                                id="input" 
                                value = {item.value}
                                onBlur ={()=>handleBlur(index)}
                                onChange = {(e)=>valueChange(index,e.target.value)}>
                                </input>
                                )
                                    
                            }
                            <div className="deleted" onClick = {(e)=>{e && e.stopPropagation();deleItem(index)}}>del</div>
                        </li>)
                        })
                    }
                </ul>
            </div> 
        )
    }
}

export default UndoLiist;