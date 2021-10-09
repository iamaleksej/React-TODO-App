import React from 'react';

import './todo-list-item.css';


export default class TodoListItem extends React.Component {

	state = {
		done: false,
		important: false
	};

	// onMarkDone = () => {
	//   this.setState(({done}) => {
	//     return {
	//       done: !done
	//     };
	//   });
	// };
	// 
	// onMarkImportant = () => {
	//   this.setState(({important}) => {
	//     return {
	//       important: !important
	//     };
	//   });
	// };

	render() {
		const { label, onDeleted,
			onToggleDone, onToggleImportant,
			done, important } = this.props;

		let classNames = 'todo-list-item-text';
		if (done) {
			classNames += ' done';
		};
		if (important) {
			classNames += ' important';
		};


		return (
			<div className="todo-list-item">
				<span className={classNames}>{label}</span>
				<div className='todo-list-btns'>
					<button
						className="btn"
						onClick={onToggleDone}>
						<i className="fa fa-check"></i>
					</button>
					<button
						className="btn"
						onClick={onToggleImportant}>
						<i className="fas fa-exclamation"></i></button>
					<button
						className="btn"
						onClick={onDeleted}>
						<i className="fas fa-trash"></i></button>
				</div>
			</div>
		);
	}
};
