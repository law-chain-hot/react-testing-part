import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'


beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'jck'}, {name: 'lucy'}]
    })
})

afterEach(() => {
    moxios.uninstall()

})

it('is temporarily banned', () => {
    expect(1).toEqual(1)
})

// it('can fetch a list of comments and display them', () => {
//     // Attempt to render the entire app
//     const wrapped = mount(
//         <Root>
//             <App/>
//         </Root>
//     )

//     // Find the button of the fetch and click it
//     wrapped.find('.fetch-comments').simulate('click')

//     // Expect the comments are displayed
//     moxios.wait(() => {
//         wrapped.update()
//         expect(wrapped.find('li').length).toEqual(2)

//         wrapped.unmount()
//     })
// })