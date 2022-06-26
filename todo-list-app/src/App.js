import Header from "./components/Header";
import React, { useState } from "react";
import TodoList from "./components/todoList/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { IoConstructOutline } from "react-icons/io5";
import CompletedList from "./components/completedList/CompletedList";

const Main = styled.div`
	margin: 0;
	font-family: "Inter", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: 700px;
	/* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
	box-shadow: rgba(97, 184, 250, 0.2) 0px 7px 29px 0px;
	padding: 60px;
	margin-top: 5em;
`;

const jsonData = require("./data/data.json");

const jsonOriginalTodoListObjectList = jsonData["originalTodoList"];

const originalTodoList = jsonOriginalTodoListObjectList.map(object => {
	object.id = nanoid();
	return object;
});

const jsonOriginalCompletedListData = jsonData["originalCompletedList"];

const originalCompletedList = jsonOriginalTodoListObjectList.map(object => {
	object.id = nanoid();
	return object;
});

function App() {
	const [list, setList] = useState(originalTodoList);
	const [textInput, setTextInput] = useState("");
	const [homeInput, setHomeInput] = useState(false);
	const [workInput, setWorkInput] = useState(false);
	const [completedList, setCompletedList] = useState(
		jsonOriginalCompletedListData
	);

	const handleTextInput = e => {
		setTextInput(e.target.value);
	};

	const handleAddItem = () => {
		const newItem = {
			id: nanoid(),
			text: textInput,
			home: homeInput,
			work: workInput,
			completed: false,
		};
		const newLists = [newItem, ...list];
		setList(newLists);
		setTextInput("");
		setHomeInput(false);
		setWorkInput(false);
	};

	const handleHomeTag = () => {
		setHomeInput(!homeInput);
	};

	const handleWorkTag = () => {
		setWorkInput(!workInput);
	};

	const handleCompletedItem = id => {
		const newCompletedItem = list.find(item => item.id === id);
		newCompletedItem.completed = true;
		setCompletedList([newCompletedItem, ...completedList]);
		handleDeletedItem(id);
	};

	const handleDeletedItem = id => {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	};

	return (
		<Main>
			<Header></Header>
			<TodoList
				list={list}
				handleTextInput={handleTextInput}
				handleAddItem={handleAddItem}
				textInput={textInput}
				handleHomeTag={handleHomeTag}
				handleWorkTag={handleWorkTag}
				homeInput={homeInput}
				workInput={workInput}
				handleCompletedItem={handleCompletedItem}
				handleDeletedItem={handleDeletedItem}
			/>
			<CompletedList completedList={completedList} />
		</Main>
	);
}

export default App;
