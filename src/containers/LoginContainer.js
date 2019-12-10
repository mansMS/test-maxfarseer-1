import React from 'react';
import { connect } from 'react-redux'
import Login from '../components/pages/login';
import { logIn } from '../actions';

const LoginContainer = ({ logIn }) => {
    return <Login logIn={logIn} />
}

const mapDispatchToProps = {logIn}

export default connect(null, mapDispatchToProps)(LoginContainer)