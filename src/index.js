import React from "react";
import ReactDOM from "react-dom";
import projectsData from "./api/data";
import {AppContainer} from "react-hot-loader";
import _ from "lodash";
// AppContainer is a necessary wrapper component for HMR
import App from "container/App";

const render = (Component, projectsData, sortBy) => {
  ReactDOM.render(
    <AppContainer>
      <Component
        projectsData={projectsData}
        onSearch={onSearch}
        onSortBy={onSortBy}
        sortBy={sortBy}
        clearSortResult={clearSortResult}
      />
    </AppContainer>,
    document.getElementById("root")
  );
};

function onSearch(value) {
  if (value.trim() == "") {
    render(App, projectsData);
  }
  const regex = new RegExp(value.toLowerCase(), "i");
  const data = projectsData.filter(project => {
    return regex.test(project.projectName.toLowerCase());
  });

  render(App, data);
}

function onSortBy(sortBy) {
  sortBy = sortBy;
  const data = _.sortBy(projectsData, function(project) {
    return project[sortBy];
  });
  render(App, data.reverse(), sortBy);
}

function clearSortResult(){
  render(App, projectsData);
}

setTimeout(()=>{
  render(App, projectsData);
},3000);

render(App, undefined);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("container/App", () => {
    const NewApp = require("container/App").default;
    render(NewApp);
  });
}
