import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'Root'


let wrapped


beforeEach(() => {
    const initialState = {
        commentsPart: {
            comments: ['comment1', 'comment2']
        }
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
}) 


it('shows text for each comment', () => {
    expect(wrapped.render().text()).toContain('comment1')
    expect(wrapped.render().text()).toContain('comment2')
}) 
