import TodoList from '../../index'
import React from 'react'


import {shallow } from 'enzyme'
//第一个测试用例：浅渲染
describe('测试TodoList组件', function () {
    it('测试TodoList组件包含input', function () {
        const wrapper = shallow(<TodoList/>);
        expect(wrapper.state('undoList')).toEqual([]);
    });
    it('测试TodoList组件增加方法', function () {
        const wrapper = shallow(<TodoList/>);
        const Header = wrapper.find('Header');
        expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem);
    });
    it('测试TodoList组件回车 undoList新增内容', function () {
        const wrapper = shallow(<TodoList/>);
        const Header = wrapper.find('Header')
        const addFunc = Header.prop('addUndoItem');
        addFunc('react')
        expect(wrapper.state('undoList')[0]).toEqual({
            status:'div',
            value:'react'
        })
    });
    it('测试TodoList组件回车 给UndoList传递List，deleItem,changeStatus', function () {
        const wrapper = shallow(<TodoList/>);
        const UndoList = wrapper.find('UndoList');
        // expect(UndoList.prop('list')).toBeTruthy();
        // expect(UndoList.prop('deleItem')).toBeTruthy();
        // expect(UndoList.prop('changeStatus')).toBeTruthy();
    });
    it('测试TodoList组件 删除', function () {
        const wrapper = shallow(<TodoList/>);
        const data = [{
            status:'div',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        wrapper.setState({
            undoList : data
        })
        wrapper.instance().deleItem(1)
        expect(wrapper.state('undoList')).toEqual([data[0]])
    });
    it('测试TodoList组件 修改', function () {
        const wrapper = shallow(<TodoList/>);
        const data = [{
            status:'div',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        wrapper.setState({
            undoList : data
        })
        wrapper.instance().changeStatus(1)
        expect(wrapper.state('undoList')[1]).toEqual({
            ...data[1],
            status:'input'
        })
    });
}); 