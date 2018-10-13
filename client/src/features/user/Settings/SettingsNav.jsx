import React from 'react'
import {Grid,Menu,Header} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

const SettingsNav = () => {
  return (
        <Grid.Column width={4}>
          <Menu vertical>
            <Header icon="user" attached inverted color="grey" content="پروفایل" />
            <Menu.Item as={NavLink} to="/settings/basic">اطلاعات</Menu.Item>
            <Menu.Item as={NavLink} to="/settings/about">درباره من</Menu.Item>
            <Menu.Item as={NavLink} to="/settings/photos">تصاویر من</Menu.Item>
          </Menu>
          <Grid.Row />
          <Menu vertical>
            <Header
              icon="settings"
              attached
              inverted
              color="grey"
              content="حساب کاربری"
            />
            <Menu.Item as={NavLink} to="/settings/account">حساب من</Menu.Item>
          </Menu>
        </Grid.Column>
  )
}

export default SettingsNav
