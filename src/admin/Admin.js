import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio'
import { auth } from '../firebase-config';

class Admin extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggingIn : true,
            isAuthenticated : false,
            user : null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isLoggingIn : false,
                isAuthenticated : !!user,
                user
            })
        })
    }

    render() {
        if(this.state.isLoggingIn){
            return (
                <p className="text-center"> Wait<div className="loader "></div></p>
            )
        }
        if(!this.state.isAuthenticated){
            return <Redirect to='/login' />
        }
        return(
            <div className="container">
                <h2>ADMIN AREA</h2>
                <Route path = {`/`} component={AdminMenu} />
                <Route path = {`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
            </div>
        )
    }
}

export default Admin