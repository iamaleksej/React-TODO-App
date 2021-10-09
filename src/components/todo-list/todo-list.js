import React from 'react';

import TodoListItems from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted,
	onToggleDone, onToggleImportant }) => {

	const elements = todos.map((item) => {

		const { id, ...itemProps } = item;

		return (
			<li key={id}>
				<TodoListItems
					{...itemProps}
					onDeleted={() => onDeleted(id)}
					onToggleDone={() => onToggleDone(id)}
					onToggleImportant={() => onToggleImportant(id)} />
			</li>
		);
	});

	return (
		<ul className="todo-list">
			{elements}
		</ul>
	);
};

export default TodoList;
