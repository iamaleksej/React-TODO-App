import React from 'react';

import './app-header.css';

export default class AppHeader extends React.Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <div className='app-header'>
        <h1>Todo App</h1>
        <input type="text"
                placeholder="Поиск"
                onChange={this.onSearchChange}/>
      </div>
    );
  };
};
