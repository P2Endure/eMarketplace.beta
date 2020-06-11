import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import TopBar from "./components/styleComponents/TopBar";
import Footer from './components/styleComponents/Footer';
import Content from "./components/styleComponents/Content";
import Sidebar from "./components/styleComponents/Sidebar";

import {IoMdHelp, IoMdFiling} from "react-icons/io";

export default class App extends Component { 

constructor(props){
  super(props)
  this.state = {
    filename: null,
    windowWidth: 0,
    windowHeight: 0
  }
  this.updateDimensions = this.updateDimensions.bind(this);
}

componentDidMount() {
      // Call our fetch function below once the component mounts
/*   this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err)); */

  this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions); 
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
/* callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
    return body;
}; */

componentWillUnmount() {
  window.removeEventListener("resize", this.updateDimensions);
}

updateDimensions() {
  let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  this.setState({ windowWidth, windowHeight });
}

render(){
  const { windowWidth } = this.state;
  const sidebarCollapsed = windowWidth < 1100;
  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    // show footer menu text when window is wide enough
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarCollapsed,
    sidebarWidth: sidebarCollapsed ? 50 : 150
  };

  const menuItems = [
    { text: "How To", icon: <IoMdHelp/> },
    { text: "Impressum", icon: <IoMdFiling/> },
  ];

  if (styles.showSidebar) {
    menuItems.push({ icon: `⚙`, text: "Settings" });
  }

  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative"
      }}
    >
    {styles.showSidebar ? (
          
          <Sidebar menuItems={menuItems} styles={styles} />
            ) : (
          <TopBar styles={styles} />
          )}
          
          <Content styles={styles} />
    {!styles.showSidebar && (
          <Footer menuItems={menuItems} styles={styles} />
          )}
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
