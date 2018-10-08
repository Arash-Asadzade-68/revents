import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item header>
              <img src="assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item>
              <Button floated="left" positive inverted content="ایجاد رویداد" />
            </Menu.Item>
            <Menu.Item name="رویداد ها" />

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
