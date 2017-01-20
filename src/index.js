import React from "react";
import ReactDOM from "react-dom";
import projectsData from "./api/data";
import {AppContainer} from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR
import App from "container/App";

const render = (Component,projectsData) => {
  ReactDOM.render(
    <AppContainer>
      <Component projectsData={projectsData} onSearch={onSearch}/>
    </AppContainer>,
    document.getElementById("root")
  );
};

function onSearch(value){
  if(value.trim() == ''){
    render(App,projectsData)
  }
  const regex = new RegExp(value.toLowerCase(),'i')
  const data = projectsData.filter( (project) => {
    return regex.test(project.projectName.toLowerCase())
  })

  render(App,data)
}

render(App,projectsData);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("container/App", () => {
    const NewApp = require("container/App").default;
    render(NewApp);
  });
}
