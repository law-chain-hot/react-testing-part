import React, { useEffect }from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'redux/actions'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import requireAuth from 'components/requireAuth'

const App = (props) => {

    // useEffect(() => {
    //     const shouldNavigateAway = () => {
    //         if(!props.auth){
    //             props.history.push('/')
    //         }
    //     }
    //     shouldNavigateAway()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [props.auth])


    const renderButton = () => {
        const words = props.auth ? 'Sign Out' : 'Sign In'
        const currAuth = !props.auth
        return (
            <button className="btn-sign" onClick={() => props.changeAuth(currAuth)}>
                {words}
            </button>
        )
    }


    const renderHeader = () => (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li id="link-to-post">
                <Link to='/post'>Post</Link>
            </li>
            <li>
                {renderButton()}
            </li>
        </ul>
    )


    return (
        <div>
            {renderHeader()}
            <Route path='/post' exact component={CommentBox} />
            <Route path='/' exact component={CommentList} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App)