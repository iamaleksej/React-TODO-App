import React from 'react';

import './app-footer.css';

export default class AppFooter extends React.Component {

  render() {
    return (
      <div className="app-footer">
        <button onClick={ this.props.onDeletedAll }>Очистить все</button>
      </div>
    );
  };
};
