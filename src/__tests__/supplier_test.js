import React from 'react'
import { shallow } from 'enzyme'
import NewSupplier from '../pages/ProcurmentStaff/Supplier_Section/newSupplier'

describe('New Supplier Component', () => {
    it('Should render without throwing an error', () => {
        expect(shallow(<NewSupplier/>).find('form.supplier').exists()).toBe(true)
    })
    it('Renders a supplier name input', () => {
        expect(shallow(<NewSupplier/>).find('#name').length).toEqual(1)
    })
})

describe('Name input', () => {
    it('Should respond to change event and change the state', () => {
        const wrapper = shallow(<NewSupplier/>);
        wrapper.find('#name').simulate('change', {target: {name: 'name', value: 'Feona Green'}})
        expect(wrapper.state('name')).toEqual('Feona Green')
    })
})