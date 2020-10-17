import React from 'react'
import { shallow } from 'enzyme'
import NewItem from '../pages/ProcurmentStaff/Item_Section/newItem'

describe('New Item Component', () => {
    it('Should render without throwing an error', () => {
        expect(shallow(<NewItem/>).find('form.item').exists()).toBe(true)
    })
    it('Renders a item unit price input', () => {
        expect(shallow(<NewItem/>).find('#unit_price').length).toEqual(1)
    })
})

describe('Unit price input', () => {
    it('Should respond to change event and change the state', () => {
        const wrapper = shallow(<NewItem/>);
        wrapper.find('#unit_price').simulate('change', {target: {name: 'unit_price', value: '3000.00'}})
        expect(wrapper.state('unitPrice')).toEqual('3000.00')
    })
})