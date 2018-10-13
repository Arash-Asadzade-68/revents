import React from "react";
import { Menu,Dropdown,Image } from "semantic-ui-react";
import {Link} from 'react-router-dom'
const SignedInMenu = ({SignOut}) => {
  return (
    <Menu.Item position="left">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item text="ایجاد رویداد" icon="plus" />
          <Dropdown.Item text="رویدادهای من" icon="calendar" />
          <Dropdown.Item text="شبکه دوستان" icon="users" />
          <Dropdown.Item text="پروفایل من" icon="user" />
          <Dropdown.Item as={Link} to="/settings" text="تنضیمات" icon="settings" />
          <Dropdown.Item onClick={SignOut} text="خروج" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
