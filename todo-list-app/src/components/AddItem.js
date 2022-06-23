import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { StyledIcons, StyledTodoItem, StyledTag } from "./TodoItem";

const StyledTick = styled(StyledIcons)`
	font-size: 1.4rem;
`;

const StyledInput = styled.input`
	&:focus {
		outline: none;
	}
	border: none;
	width: 100%;
	font-size: inherit;
	color: #3f3f3f;
	margin-left: 2rem;
`;

const StyledTagButton = styled(StyledTag)`
	--tag-color-inactive: #a7a7a7;
	--tag-color-active: #0059d6;
	${props => {
		if (props.Input) {
			return `
				color: var(--tag-color-active);
				border-color: var(--tag-color-active);
				background-color: #e2eeff;
			`;
		} else {
			return `
				color: var(--tag-color-inactive);
				border-color: var(--tag-color-inactive);
				background-color: #f9f9f9;
			`;
		}
	}}
`;

function AddItem({
	handleTextInput,
	handleAddItem,
	textInput,
	handleWorkTag,
	handleHomeTag,
	homeInput,
	workInput,
}) {
	return (
		<StyledTodoItem>
			<StyledInput
				type="text"
				placeholder="Type here..."
				onChange={handleTextInput}
				value={textInput}
				onKeyPress={e => {
					if (e.key === "Enter") {
						textInput && handleAddItem();
					}
				}}
			/>
			<StyledTagButton onClick={() => handleHomeTag()} Input={homeInput}>
				home
			</StyledTagButton>
			<StyledTagButton onClick={() => handleWorkTag()} Input={workInput}>
				work
			</StyledTagButton>
			<StyledTick>
				<TiTick
					onClick={() => {
						textInput && handleAddItem();
					}}
				/>
			</StyledTick>
		</StyledTodoItem>
	);
}

export default AddItem;
