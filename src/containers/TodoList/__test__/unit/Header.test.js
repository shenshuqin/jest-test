import Header from '../../components/Header'
import React from 'react'
import {findTestWrapper} from '../../../../utils/testUtils' 

import {shallow } from 'enzyme'
//第一个测试用例：浅渲染
describe('测试Header组件', function () {
    // 使用快照
    it('测试Header组件渲染样式正常', function () {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('测试Header组件包含input', function () {
        const wrapper = shallow(<Header/>);
        // const inputElem = wrapper.find("input");
        const inputElem = findTestWrapper(wrapper,'input')
        expect(inputElem.length).toBe(1);
    });
    it('测试Header组件内容初始化为空', function () {
        const wrapper = shallow(<Header/>);
        const inputElem = findTestWrapper(wrapper,'input')
        expect(inputElem.prop('value')).toEqual("");
    });
    it('测试Header组件onChange事件', function () {
        const wrapper = shallow(<Header/>);
        const inputElem = findTestWrapper(wrapper,'input')
        const userInput = '学习'
        inputElem.simulate('change',{
            target : { value : userInput}
        })
        expect(wrapper.state('value')).toEqual(userInput);
    });
    it('测试Header组件回车 ，input 无内容无操作', function () {
        const fn = jest.fn()
        const wrapper = shallow(<Header addUndoItem = {fn}/>); //当Header回车的时候触发addUndoItem
        const inputElem = findTestWrapper(wrapper,'input')
        wrapper.setState({
            value : ''
        })
        inputElem.simulate('keyUp',{
            keyCode:13
        })
        expect(fn).not.toHaveBeenCalled();
    });
    it('测试Header组件回车 ，input 有内容有操作', function () {
        const fn = jest.fn()
        const wrapper = shallow(<Header addUndoItem = {fn}/>); //当Header回车的时候触发addUndoItem
        const inputElem = findTestWrapper(wrapper,'input')
        wrapper.setState({
            value : '学习'
        })
        inputElem.simulate('keyUp',{
            keyCode:13
        })
        expect(fn).toHaveBeenCalled();
        expect(inputElem.prop('value')).toBe('')
    });
}); 