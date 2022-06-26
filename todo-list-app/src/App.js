import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import TodoList from "./components/todoList/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CompletedList from "./components/completedList/CompletedList";
import NavBar from "./components/NavigationBar";
import { originalCompletedList, originalTodoList } from "./data/processData";

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
	const [completedList, setCompletedList] = useState(originalCompletedList);
	const [textInput, setTextInput] = useState("");
	const [tagInput, setTagInput] = useState({ home: false, work: false });
	const [displayList, setDisplayList] = useState(originalTodoList);
	const [displayCompleteList, setDisplayCompleteList] = useState(
		originalCompletedList
	);


	useEffect(() => {
		setDisplayList(list);
	}, [list]);

	useEffect(() => {
		setDisplayCompleteList(completedList);
	}, [completedList]);

	const handleTextInput = e => {
		setTextInput(e.target.value);
	};

	const handleAddItem = () => {
		const newItem = {
			id: nanoid(),
			text: textInput,
			home: tagInput.home,
			work: tagInput.work,
			completed: false,
		};
		const newLists = [newItem, ...list];
		setList(newLists);
		setTextInput("");
		setTagInput({ home: false, work: false });
	};

	const handleHomeTag = () => {
		setTagInput({...tagInput, "home": !tagInput.home});
	};

	const handleWorkTag = () => {
		setTagInput({ ...tagInput, work: !tagInput.work });
	};

	const handleCompletedItem = (id, isCompleted) => {
		if (isCompleted) {
			const newListItem = completedList.find(item => item.id === id);
			newListItem.completed = false;
			setList([newListItem, ...list]);
			handleDeletedItem(id, isCompleted);
		} else {
			const newCompletedItem = list.find(item => item.id === id);
			newCompletedItem.completed = true;
			setCompletedList([newCompletedItem, ...completedList]);
			handleDeletedItem(id, isCompleted);
		}
	};

	const handleDeletedItem = (id, isCompleted) => {
		if (isCompleted) {
			// delete from completed list
			const newCompletedList = completedList.filter(item => item.id !== id);
			setCompletedList(newCompletedList);
		} else {
			const newList = list.filter(item => item.id !== id);
			setList(newList);
		}
		console.log(list);
	};

	const handleEditItem = id => {};

	const handleNavBar = type => {
		if (type === null) {
			setDisplayList(list);
			setDisplayCompleteList(completedList);
		} else {
			const newList = list.filter(item => item[type] === true);
			setDisplayList(newList);
			const newCompletedList = completedList.filter(
				item => item.completed === true && item[type] === true
			);
			setDisplayCompleteList(newCompletedList);
		}
	};

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
			<NavBar handleNavBar={handleNavBar} />
			<Container>
				<Header></Header>
				<TodoList list={displayList} data={todoListChildrenObject} />
				<CompletedList
					completedList={displayCompleteList}
					data={completedListChildrenObject}
				/>
			</Container>
		</Main>
	);
}

export default App;
