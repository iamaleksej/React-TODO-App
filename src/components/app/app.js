import React from 'react';

import AppHeader from '../app-header';
import InputField from '../input-field';
import TodoList from '../todo-list';
import AppFooter from '../app-footer';
import ButtonsStatus from '../buttons-status';
import './app.css';



export default class App extends React.Component {

	maxId = 999;
	state = {
		todoData: [],
		term: '',
		filter: 'all'
	};

	createTodoItem(label) {
		return {
			label,
			done: false,
			id: this.maxId++
		};
	};

	deleteAllItems = () => {
		this.setState(({ todoData }) => {
			return {
				todoData: []
			};
		});
	};

	deleteItem = (id) => {

		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArr = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArr
			};
		});
	};

	addItem = (text) => {

		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArray = [
				...todoData,
				newItem
			];

			return {
				todoData: newArray
			};
		});
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem.[propName] };

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	onSearchChange = (term) => {
		this.setState({ term });
	};

	search = (items, term) => {
		if (term.length === 0) {
			return items;
		};

		return items.filter((item) => {
			return item.label
				.toLowerCase()
				.indexOf(term.toLowerCase()) > -1;
		});
	};

	filter = (items, filter) => {

		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		}
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter(
			this.search(todoData, term), filter);
		const doneCount = todoData
			.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;


		return (
			<div>
				<AppHeader onSearchChange={this.onSearchChange} />
				<InputField onAddItem={this.addItem} />
				<ButtonsStatus
					toDo={todoCount} done={doneCount}
					filter={filter}
					onFilterChange={this.onFilterChange} />
				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant} />
				<AppFooter onDeletedAll={this.deleteAllItems} />
			</div>
		);
	};
};
