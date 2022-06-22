import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { StyledIcons, StyledTodoItem } from "./TodoItem";

const StyledTick = styled(StyledIcons)`
	font-size: 1.4rem;
`;

const StyledInput = styled.input`
	border: none;
	&:focus {
		outline: none;
	}
	width: 100%;
	font-size: inherit;
	color: #3f3f3f;
	margin-left: 2rem;
`;

function AddItem() {
	return (
		<StyledTodoItem>
			<StyledInput type="text" placeholder="Type here...">
				{}
			</StyledInput>
			<StyledTick>
				<TiTick />
			</StyledTick>
		</StyledTodoItem>
	);
}

export default AddItem;
