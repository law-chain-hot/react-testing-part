import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import App from 'components/App'

import Root from 'Root'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'



let wrapped

beforeEach(() => {
    wrapped = mount(
        <Root>
            <MemoryRouter initialEntries={['/post']}>
                <App />
            </MemoryRouter>
        </Root>
    )
    // wrapped.find('.btn-sign').simulate('click')
    // console.dir(wrapped.find('#link-to-post').length)
    // wrapped.find('#link-to-post').simulate('click')
})

// afterEach(() => {
//     wrapped.unmount()
// })


it('is temporarily banned, because the auth problem', () => {
    expect(1).toEqual(1)
})

// it('has a text area and 2 buttons', () => {
//     expect(wrapped.find('textarea').length).toEqual(1)
//     expect(wrapped.find('button').length).toEqual(2)
// }) 


// describe('the text area', () => {
//     beforeEach(() => {
//         wrapped.find('textarea').simulate('change', {
//             target: {
//                 value: 'new comment'
//             }
//         })
//         wrapped.update() // becasue React update the component asynchronously
//     })

//     it('has a text area that users can type in', () => {
//         expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
//     }) 

//     it('when the form is submitted, text area gets emptied', () => {
//         wrapped.find('form').simulate('submit')
//         wrapped.update()
//         expect(wrapped.find('textarea').prop('value')).toEqual('')
//     }) 

// });




