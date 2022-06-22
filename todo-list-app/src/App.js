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
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	padding: 60px;
	margin-top: 5em;
`;

const originalTodoList = [
	{
		id: nanoid(),
		text: "Good Morning",
	},
	{
		id: nanoid(),
		text: "Good Night",
	},
];

function App() {
	const [list, setList] = useState(originalTodoList);

	const addTodoItem = text => {
		const newItem = {
			id: nanoid(),
			text: text,
		};
		const newLists = [...list, newItem];
		setList(newLists);
	};

	return (
		<Main>
			<Header></Header>
			<TodoList list={list} />
		</Main>
	);
}

export default App;
