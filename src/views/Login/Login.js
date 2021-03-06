import React, { PropTypes, Component } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import styles from './Login.css'

export class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <div className={styles.root}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </div>
        <div>
          <p>The components for the homepage go here</p>
        </div>
      </div>
    )
  }
}

export default Login;
