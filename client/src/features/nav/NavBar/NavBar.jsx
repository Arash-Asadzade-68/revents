import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    isAuth: false
  };
  handleSignIn = () => {
    this.setState({
      isAuth: true
    });
  };
  handleSignOut = () => {
    this.setState({
      isAuth: false
    });
    this.props.history.push("/");
  };

  render() {
    const isAuth = this.state.isAuth;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="/assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events" name="رویداد ها" />
            {isAuth && <Menu.Item as={NavLink} to="/people" name="کاربران" />}
            {isAuth && (
              <Menu.Item>
                <Button
                  as={Link}
                  to="/createEvent"
                  floated="left"
                  positive
                  inverted
                  content="ایجاد رویداد"
                />
              </Menu.Item>
            )}
            {isAuth ? (
              <SignedInMenu SignOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu SignIn={this.handleSignIn} />
            )}
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
