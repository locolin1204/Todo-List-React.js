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
}) {
	return (
		<StyledTodoList>
			<StyledTodoHeader>Todo</StyledTodoHeader>
			<AddItem
				handleTextInput={handleTextInput}
				textInput={textInput}
				handleAddItem={handleAddItem}
				g
				handleHomeTag={handleHomeTag}
				handleWorkTag={handleWorkTag}
				homeInput={homeInput}
				workInput={workInput}
			/>
			{list.map(item => (
				<TodoItem
					handleCompletedItem={handleCompletedItem}
					item={item}
					key={item.id}
					handleDeletedItem={handleDeletedItem}
				/>
			))}
		</StyledTodoList>
	);
}

export default TodoList;
