import React from 'react';

import CountingTasks from '../counting-tasks';
import './buttons-status.css';


export default class ButtonsStatus extends React.Component {

	buttons = [
		{ name: 'all', label: 'Все' },
		{ name: 'active', label: 'Активные' },
		{ name: 'done', label: 'Сделанные' }
	];

	render() {
		const { toDo, done, filter, onFilterChange } = this.props;
		const buttons = this.buttons.map(({ name, label }) => {
			const isActive = filter === name;
			const classFilter = isActive ? 'btn-active' : 'btn-done';

			return (
				<button type='button'
					className={`btn ${classFilter}`}
					key={name}
					onClick={() => { onFilterChange(name) }}>
					{label}
				</button>
			);
		});


		return (
			<div className="text-buttons-status">
				<CountingTasks toDo={toDo} done={done} />
				<div className="buttons-status">
					{buttons}
				</div>
			</div>
		);
	};
};
