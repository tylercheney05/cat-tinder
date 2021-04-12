import { withRouter, Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import { Component } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider'

const Navbar = ({user, handleLogout, history, location}) => {

  const rightNavItems = () => {
    if(user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item 
            name="logout"
            onClick={ () => handleLogout(history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item 
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  return(
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item 
            id='home'
            name='home'
            active={location.pathname === '/'}
          />
        </Link>
        { rightNavItems()}
      </Menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    {auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)