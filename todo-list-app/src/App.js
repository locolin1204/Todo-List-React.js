import Header from "./components/Header";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import { nanoid } from "nanoid";

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

const originalTodoList = [
	{
		id: nanoid(),
		text: "Good Morning",
		home: true,
		work: false,
	},
	{
		id: nanoid(),
		text: "Good Night",
		home: false,
		work: true,
	},
];

function App() {
	const [list, setList] = useState(originalTodoList);
	const [textInput, setTextInput] = useState("");
	const [homeInput, setHomeInput] = useState(false);
	const [workInput, setWorkInput] = useState(false);

	const handleTextInput = e => {
		setTextInput(e.target.value);
	};

	const handleAddItem = () => {
		const newItem = {
			id: nanoid(),
			text: textInput,
			home: homeInput,
			work: workInput,
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
			/>
		</Main>
	);
}

export default App;
