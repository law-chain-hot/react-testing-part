import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const Header = (props) => {
    const renderLinks = () => {
        if (props.authenticated) {
          return (
            <>
              <Link to="/signout">Sign Out</Link>
              <Link to="/feature">Feature</Link>
            </>
          );
        } else {
          return (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          );
        }
      }

    return (
        <div style={{ display: "flex", justifyContent: "space-around" , flexDirection: "column"}}>
            <Link to="/">Redux Auth</Link>
            {renderLinks()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)
