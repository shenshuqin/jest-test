import React ,{Component} from 'react';
import '../style.less'


class Header extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputKeyup = this.handleInputKeyup.bind(this)
        this.state = {
            value: ''
        }
    }
    handleInputChange (e) {
        this.setState({
            value : e.target.value
        })
    }
    handleInputKeyup(e) {
        const { value } = this.state
        if(e.keyCode === 13 && value) {
            this.props.addUndoItem(value)
        }
    }
    render() {
        const {value} = this.state;
        return (
            <div className="header">
                <div className="header-content">
                   <span> TodoList </span>
                    <input 
                        id="input" 
                        value = {value}  
                        className="header-input" 
                        placeholder="todo" 
                        onChange = {this.handleInputChange} 
                        onKeyUp = {this.handleInputKeyup}/>
                </div>
            </div> 
        )
    }
}

export default Header;