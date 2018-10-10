import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import {NavLink , Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={Link} to="/" header>
              <img src="assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/createEvent" floated="left" positive inverted content="ایجاد رویداد" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/events"  name="رویداد ها" />
            <Menu.Item as={NavLink} to="/people"  name="کاربران" />
            <Menu.Item as={NavLink} to="/settings"  name="تنظیمات" />

            <Menu.Item position="left">
              <Button
                basic
                inverted
                content="خروج"
                style={{ marginRight: "0.5em" }}
              />
              <Button basic inverted content="ورود" />
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
