import React from 'react'
import { shallow } from 'enzyme'
import Policy from '../pages/ProcurmentStaff/Policy_Section/policies'

describe('Policy Component', () => {
    it('Should render without throwing an error', () => {
        expect(shallow(<Policy/>).find('form.policy').exists()).toBe(true)
    })
    it('Renders a Staff Limit input', () => {
        expect(shallow(<Policy/>).find('#staffApproveLimit').length).toEqual(1)
    })
})

describe('Staff Limit input', () => {
    it('Should respond to change event and change the state', () => {
        const wrapper = shallow(<Policy/>);
        wrapper.find('#staffApproveLimit').simulate('change', {target: {name: 'staffApproveLimit', value: '100000'}})
        expect(wrapper.state('staffApproveLimit')).toEqual('100000')
    })
})