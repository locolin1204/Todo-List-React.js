import React from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import styled from "styled-components";

const StyledTodoList = styled.div``;

const StyledTodoHeader = styled.div`
	background-color: #d8d8d8;
	/* border: solid grey 1px; */
	border-radius: 0.2em;
	padding: 0.3rem 0.8rem;
	width: max-content;
	font-size: 0.8em;
	color: #464646;
	/* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */
`;

function TodoList({ list, data }) {
	const {
		handleTextInput,
		handleAddItem,
		handleHomeTag,
		handleWorkTag,
		textInput,
		tagInput,
	} = data;

	const addItemObject = {
		handleTextInput,
		handleAddItem,
		handleHomeTag,
		handleWorkTag,
		textInput,
		tagInput,
	};
	return (
		<StyledTodoList>
			<StyledTodoHeader>Todo</StyledTodoHeader>
			<AddItem data={addItemObject} />
			{list.map(item => (
				<TodoItem
					handleCompletedItem={data.handleCompletedItem}
					handleDeletedItem={data.handleDeletedItem}
					handleEditItem={data.handleEditItem}
					item={item}
					key={item.id}
				/>
			))}
		</StyledTodoList>
	);
}

export default TodoList;
export { StyledTodoHeader };
