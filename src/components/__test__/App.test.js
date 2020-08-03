import React from 'react'
import App from 'components/App'
import { shallow, mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import Root from 'Root'

let wrapped

beforeEach(() => {
    // wrapped = mount(
    //     <Root>
    //         <BrowserRouter>
    //             <App />
    //         </BrowserRouter>
    //     </Root>
    // )

    wrapped = mount(
        <Root>
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        </Root>
    )
    // console.log("======", wrapped)

    // wrapped.find('.btn-sign').simulate('click')
    // console.dir(wrapped.find('#link-to-post').length)

    // wrapped.find('#link-to-post').simulate('click')
})

afterEach(() => {
    wrapped.unmount()
})

describe('1. App component', () => {
    it('shows a comment box', () => {
        expect(wrapped.find(CommentBox).length).toEqual(0)
    })

    it('shows a comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1)
    })
})

