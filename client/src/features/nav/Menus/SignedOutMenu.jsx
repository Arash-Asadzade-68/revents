import React from "react";
import {Button , Menu} from "semantic-ui-react"; 

const SignedOutMenu = ({SignIn}) => {
  return (
    <Menu.Item position="left">
      <Button basic inverted content="ثبت نام" style={{ marginRight: "0.5em" }} />
      <Button onClick={SignIn} basic inverted content="ورود" />
    </Menu.Item>
  );
};

export default SignedOutMenu;
