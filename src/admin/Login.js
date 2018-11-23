import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {auth} from './../firebase-config'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            isAuthenticated : false,
            isLoggingIn : false,
            error : false
        }
        this.email = null
        this.password = null

        this.authentication = this.authentication.bind(this)
    }

    authentication (){
        this.setState({isLoggingIn : true, error : false})
        auth.signInAndRetrieveDataWithEmailAndPassword(this.email.value, this.password.value)
            .then(user => {
                console.log('User logged'+user)
                this.setState({isAuthenticated : true, error : false})
            })
            .catch(err => {
                console.log(err)
                this.setState({error : true, isAuthenticated : false, isLoggingIn : true})
            })
    }

    render(){
        if(this.state.isAuthenticated){
            return <Redirect to='/admin' />
        }
        return (
            <div className="container">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username@email.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" ref={ref => this.password = ref} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {this.state.error && <small id="emailHelp" className="form-text text-muted text-danger">The password is invalid or the user does not have a password.</small>}
                </div>
                <button type="button" disabled={this.state.isLoggingIn} className="btn btn-primary" onClick={this.authentication}>Submit</button>
            </div>
        )
    }
}

export default Login