import React from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import styled from "styled-components";

const StyledTodoList = styled.div``;

function TodoList({ list }) {
	return (
		<StyledTodoList>
			<div>
				<AddItem />
				{list.map(item => (
					<TodoItem text={item.text} />
				))}
			</div>
		</StyledTodoList>
	);
}

export default TodoList;
