import UndoList from '../../components/UndoList'
import React from 'react'


import {shallow } from 'enzyme'
//第一个测试用例：浅渲染
describe('测试UndoList组件', function () {
    it('测试UndoList组件初始化，列表内容为空', function () {
        const wrapper = shallow(<UndoList list = {[]}/>); //需要传入[]
        const countElem = wrapper.find('#count');
        const listElem = wrapper.find('#list');
        expect(countElem.text()).toEqual('0');
        expect(listElem.length).toBe(0);
    });
    it('测试UndoList组件有数据', function () {
        // const listData = ['react','vue'];
        const listData = [{
            status:'div',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        const wrapper = shallow(<UndoList list = {listData}/>); //需要传入[]
        const countElem = wrapper.find('#count');
        const listElem = wrapper.find('#list');
        expect(listElem.length).toBe(2);
    });
    it('测试UndoList组件删除数据', function () {
        const listData = [{
            status:'div',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        const fn = jest.fn(); 
        const wrapper = shallow(<UndoList deleItem = {fn} list = {listData}/>);
        const deletElem = wrapper.find('.deleted');
        deletElem.at(1).simulate('click')
        expect(fn).toHaveBeenLastCalledWith(1);
    });
    it('测试UndoList组件点击某一项，触发执行changeStatus', function () {
        const listData = [{
            status:'div',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        const fn = jest.fn(); 
        const wrapper = shallow(<UndoList deleItem = {fn} list = {listData}/>);
        const deletElem = wrapper.find('.deleted');
        deletElem.at(1).simulate('click')
        expect(fn).toHaveBeenLastCalledWith(1);
    });
    it('当莫一项是input时，展示输入框', function () {
        const listData = [{
            status:'input',
            value:'react'
        },{
            status:'div',
            value:'vue'
        }];
        const wrapper = shallow(<UndoList list = {listData}/>);
        const inputItems = wrapper.find("#input")
        expect(inputItems.length).toBe(1)
    });
}); 