import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CompletedList from "./components/CompletedList/CompletedList";
import NavBar from "./components/NavigationBar";
import { originalTodoList } from "./data/processData";

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

	const completedList = list.filter((item)=>item.completed === true);
	const uncompletedList = list.filter(item => item.completed === false);

	// useEffect(() => {
	// 	setDisplayList(list);
	// }, [list]);

	// useEffect(() => {
	// 	setDisplayCompleteList(completedList);
	// }, [completedList]);


	const handleTextInput = e => {
		setTextInput({...textInput ,text: e.target.value});
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
		setTextInput({ ...textInput, text: ""});
		setTagInput({ home: false, work: false });
	};

	const handleHomeTag = (id) => {
		setTagInput({ ...tagInput, home: !tagInput.home });
	};


	const handleWorkTag = (id) => {
		setTagInput({ ...tagInput, work: !tagInput.work });
	};

const handleCompletedItem = (id) => {
	const newList = list.map(item => {
		if (item.id === id) {
			item.completed = !item.completed;
		}
		return item;
	});
	setList(newList);
};

	const handleDeletedItem = (id) => {
			const newList = list.filter(item => item.id !== id);
			setList(newList);
	};

	const handleEditItem = id => {

	};

	const handleNavBar = type => {
		// if (type === null) {
		// 	setDisplayList(list);
		// 	setDisplayCompleteList(completedList);
		// } else {
		// 	const newList = list.filter(item => item[type] === true);
		// 	setDisplayList(newList);
		// 	const newCompletedList = completedList.filter(
		// 		item => item.completed === true && item[type] === true
		// 	);
		// 	setDisplayCompleteList(newCompletedList);
		// }
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
