import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Dungeons and Dashboards';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();