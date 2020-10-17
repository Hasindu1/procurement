import React from 'react'
import { shallow } from 'enzyme'
import NewSite from '../pages/ProcurmentStaff/Site_Section/newSite'

describe('New Site Component', () => {
    it('Should render without throwing an error', () => {
        expect(shallow(<NewSite/>).find('form.site').exists()).toBe(true)
    })
    it('Renders a site email input', () => {
        expect(shallow(<NewSite/>).find('#email').length).toEqual(1)
    })
})

describe('Email input', () => {
    it('Should respond to change event and change the state', () => {
        const wrapper = shallow(<NewSite/>);
        wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'feonagreen@yahoo.com'}})
        expect(wrapper.state('email')).toEqual('feonagreen@yahoo.com')
    })
})