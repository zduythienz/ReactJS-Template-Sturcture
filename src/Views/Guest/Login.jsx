import React, { Component } from "react";
import { Form } from "antd";
import LoginForm from "./Form/LoginForm.js";
import { connect } from "react-redux";
import { login } from "../../actions/authentication";
import { changeNavGuest } from "../../actions/navControl";
import { NAV_GUEST_LOGIN } from "../../constants/navControl";

class Login extends Component {
  login = data => {
    console.log(data);
    this.props.login(data);
  };

  componentDidMount() {
    this.props.changeNavGuest(NAV_GUEST_LOGIN);
  }

  render() {
    return <LoginForm handleSubmit={this.login} />;
  }
}
const loginForm = Form.create({ name: "normal_login" })(Login);

export default connect(
  null,
  { login, changeNavGuest }
)(loginForm);
