import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import loginBackground from '../images/Login-Page-Background.jpg';
import "../css/Login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            sectionStyle: {
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${loginBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"       
              }              
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="Login" style={ this.state.sectionStyle }>
                <h1 className="login-title">Enter any combination of email and password</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
export default withRouter(Login);