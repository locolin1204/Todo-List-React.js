import React from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import styled from "styled-components";

const StyledTodoList = styled.div``;

const StyledTodoHeader = styled.div``;

function TodoList({
	list,
	handleTextInput,
	textInput,
	handleAddItem,
	handleWorkTag,
	handleHomeTag,
	homeInput,
	workInput,
	handleCompletedItem,
	handleDeletedItem,
	handleEditItem,
}) {
	return (
		<StyledTodoList>
			<StyledTodoHeader>Todo</StyledTodoHeader>
			<AddItem
				handleTextInput={handleTextInput}
				handleAddItem={handleAddItem}
				handleHomeTag={handleHomeTag}
				handleWorkTag={handleWorkTag}
				textInput={textInput}
				homeInput={homeInput}
				workInput={workInput}
			/>
			{list.map(item => (
				<TodoItem
					handleCompletedItem={handleCompletedItem}
					handleDeletedItem={handleDeletedItem}
					handleEditItem={handleEditItem}
					item={item}
					key={item.id}
				/>
			))}
		</StyledTodoList>
	);
}

export default TodoList;
