import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const readerMenuItem = ({key, title, icon, ...props}) => 
    <Menu.Item key={key} {...props}>
      <Link to={key}>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{title}</span>
      </Link>
    </Menu.Item>;


const renderSubMenu = ({ key, title, icon, sub, ...props }) => 
  <SubMenu
    key={key}
    title={
      <span>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{title}</span>
      </span>
    }
    {...props}
  >
  {sub && sub.map(item => readerMenuItem(item))}
  </SubMenu>;

  export default ({ menus, ...props }) => <Menu {...props} style={{ background: "none", color: "#fff" }}>
      {menus && menus.map(item => (item.sub && item.sub.length ? renderSubMenu(item) : readerMenuItem(item)))}
    </Menu>;
