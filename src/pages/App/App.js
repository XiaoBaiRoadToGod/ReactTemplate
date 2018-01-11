import React, { Component } from 'react';
import { Layout } from "antd";
import Routes from '../../Router';
import MenuItem from './MenuItem';
import { menus } from './menus'
import './App.less'
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  state = {
    selectOpenKey: "",
    menuMode: "inline",
  };
  componentDidMount() {
    console.log(this.props);
    this.setMenuOpenKey(this.props);
    // window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log("卸载");
  }
  //
  setMenuOpenKey = props => {
    let { pathname } = props.location;
    console.log(pathname);

    this.setState({ selectOpenKey: pathname });
  };
  openMenu = v => {
    console.log(v);
  };
  menuClick = (item, key, path) => {
    console.log(item);
    this.setState({ selectOpenKey: item.key });
  };

  render() {
    console.log(this.props);
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <MenuItem
              menus={menus}
              theme="dark"
              mode={this.state.menuMode}
              selectedKeys={[this.state.selectOpenKey]}
              onClick={this.menuClick}
            />
          </Sider>
          <Content>
            <Routes />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default App;