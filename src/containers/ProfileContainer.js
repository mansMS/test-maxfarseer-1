import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/pages/profile';
import { logOut } from '../actions';

const ProfileContainers = ({ username, logOut }) => {
    return <Profile username={username} logOut={logOut} />
}

const mapStateToProps = ({ session }) => {
    return { username: session.user.username }
}

const mapDispatchToProps = {logOut}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainers);