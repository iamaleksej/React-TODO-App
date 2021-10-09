import React from 'react';

import './input-field.css';

export default class InputField extends React.Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="input-field"
            onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Добавьте новую задачу"
          value={this.state.label}/>
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  };
};
