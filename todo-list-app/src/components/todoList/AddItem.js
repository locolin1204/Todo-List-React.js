import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";
import { StyledIcons, StyledTodoItem, StyledTag } from "./TodoItem";

const StyledTick = styled(StyledIcons)`
	font-size: inherit;
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
	--tag-color-home-active: #0059d6;
	--tag-color-work-active: #1c9f11;
	border: none;
	${({ Input, children }) => {
		if (Input) {
			if (children === "home") {
				return `
				color: var(--tag-color-home-active);
				border-color: var(--tag-color-home-active);
				background-color: #e2eeff;
			`;
			} else {
				return `
				color: var(--tag-color-work-active);
				border-color: var(--tag-color-work-active);
				background-color: #e1ffde;`;
			}
		} else {
			return `
				color: var(--tag-color-inactive);
				border-color: var(--tag-color-inactive);
				background-color: #f9f9f9;
			`;
		}
	}}
`;

const StyledTagIconsContainer = styled.div`
display: flex;
align-items: center;
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
			<StyledTagIconsContainer>
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
			</StyledTagIconsContainer>
		</StyledTodoItem>
	);
}

export default AddItem;
