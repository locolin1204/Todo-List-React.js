import Header from "./components/Header";
import React, { useState, useEffect, useRef } from "react";
import TodoList from "./components/todoList/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CompletedList from "./components/completedList/CompletedList";
import { originalTodoList } from "./data/processData";
import NavBar from "./components/NavBar";

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
	margin-top: 6em;
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

	const[individualTag, setIndividualTag]= useState(true);

	let filteredList = list.filter(item => {
		if (filter === null || item[filter]) { return item;}
		return null;
	});

	let hasRenderedListRef = useRef(false);

	useEffect(() => {
		// hasRenderedListRef.current = true;
	}, []);

	
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

	const handleHomeTag = () => {
		setTagInput({ ...tagInput, home: !tagInput.home });
	};

	const handleWorkTag = () => {
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

	const handleEditItem = (e, id) => {
		const tempText = e.target.value;
		const newList = list.map(item => {
			if (item.id === id) {
				item.text = tempText;
			}
			return item;
		});
		setList(newList)
	};


	const handleTagChange = (id, tag) =>{
		const item = list.find(item => item.id === id);
		item[tag] = !item[tag];
		setIndividualTag(!individualTag);
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

		handleTagChange,
	};

	const completedListChildrenObject = {
		handleCompletedItem,
		handleDeletedItem,
		handleEditItem,
		handleTagChange,
	};
	
	return (
		<Main>
			<NavBar filterItem={setFilter} active={filter} />
			<Container>
				<Header title={filter} />
				<TodoList
					uncompletedList={filteredList.filter(item => !item.completed)}
					data={todoListChildrenObject}
					hasListRendered={hasRenderedListRef}
				/>
				<CompletedList
					completedList={filteredList.filter(item => item.completed)}
					data={completedListChildrenObject}
					hasListRendered={hasRenderedListRef}
				/>
			</Container>
		</Main>
	);
}

export default App;
