import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu
        key="menu-2"
        icon={<DeploymentUnitOutlined />}
        title="Forms and events"
      >
        <Item key={7}>
          Input <Link to="/forms/simple-input" />
        </Item>
        <Item key={8}>
          Input and textarea <Link to="/forms/input-and-textarea" />
        </Item>
        <Item key={9}>
          Select, radio button and checkbox{" "}
          <Link to="/forms/select-radio-button-checkbox" />
        </Item>
        <Item key={10}>
          Form submit (async)
          <Link to="/forms/form-submit-async" />
        </Item>
        <Item key={11}>
          UI library form submit
          <Link to="/forms/ant-design-form-submit" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
