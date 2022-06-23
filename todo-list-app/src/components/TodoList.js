import React from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import styled from "styled-components";

const StyledTodoList = styled.div``;

function TodoList({
	list,
	handleTextInput,
	textInput,
	handleAddItem,
	handleWorkTag,
	handleHomeTag,
	homeInput,
	workInput,
}) {
	return (
		<StyledTodoList>
			<div>
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
					<TodoItem item={item} key={item.id} />
				))}
			</div>
		</StyledTodoList>
	);
}

export default TodoList;
