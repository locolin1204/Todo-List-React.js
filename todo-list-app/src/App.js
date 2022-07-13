import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CompletedList from "./components/CompletedList/CompletedList";
import { originalTodoList } from "./data/processData";
import NavBar from "./components/NavigationBar";

const Main = styled.div`
	margin: 0;
	font-family: "Inter", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 900px;
	/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
	box-shadow: rgba(97, 184, 250, 0.2) 0px 7px 29px 0px;
	margin-top: 5em;
`;

const Container = styled.div`
	padding: 60px;
	padding-top: 20px;
	/* max-width: 700px; */
`;

function App() {
	const [list, setList] = useState(originalTodoList);
	const [textInput, setTextInput] = useState({ text: "", readOnly: false });
	const [tagInput, setTagInput] = useState({ home: false, work: false });

	const [filter, setFilter] = useState(null);

	let completedList = list.filter(item => {
		if (item.completed === true && (filter === null || item[filter])) { return item; } 
			return null;
	});

	let uncompletedList = list.filter(item => {
		if (item.completed === false && (filter === null || item[filter])) { return item; }
		return null;
	});

	const handleTextInput = e => {
		setTextInput({ ...textInput, text: e.target.value });
	};

	const handleAddItem = () => {
		const newItem = {
			id: nanoid(),
			text: textInput.text,
			home: tagInput.home,
			work: tagInput.work,
			completed: false,
		};
		const newLists = [newItem, ...list];
		setList(newLists);
		setTextInput({ ...textInput, text: "" });
		setTagInput({ home: false, work: false });
	};

	const handleHomeTag = id => {
		setTagInput({ ...tagInput, home: !tagInput.home });
	};

	const handleWorkTag = id => {
		setTagInput({ ...tagInput, work: !tagInput.work });
	};

	const handleCompletedItem = id => {
		const newList = list.map(item => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
		setList(newList);
	};

	const handleDeletedItem = id => {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	};

	const handleEditItem = id => {};

	useEffect(() => {
		console.log(`This is useEffect = ${filter}`);
	}, [filter]);

	const todoListChildrenObject = {
		handleTextInput,
		handleAddItem,
		textInput,
		handleHomeTag,
		handleWorkTag,
		tagInput,
		handleCompletedItem,
		handleDeletedItem,
		handleEditItem,
	};

	const completedListChildrenObject = {
		handleCompletedItem,
		handleDeletedItem,
		handleEditItem,
	};

	return (
		<Main>
			<NavBar filterItem={setFilter} />
			<Container>
				<Header />
				<TodoList list={uncompletedList} data={todoListChildrenObject} />
				<CompletedList
					completedList={completedList}
					data={completedListChildrenObject}
				/>
			</Container>
		</Main>
	);
}

export default App;
