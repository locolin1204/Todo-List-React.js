import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { MdAdd as AddIcon } from "react-icons/md";
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

function AddItem({ data }) {
	return (
		<StyledTodoItem>
			<StyledInput
				type="text"
				placeholder="Type here..."
				onChange={data.handleTextInput}
				value={data.textInput}
				onKeyPress={e => {
					if (e.key === "Enter") {
						data.textInput && data.handleAddItem();
					}
				}}
			/>
			<StyledTagIconsContainer>
				<StyledTagButton
					onClick={() => data.handleHomeTag()}
					Input={data.tagInput.home}
				>
					home
				</StyledTagButton>
				<StyledTagButton
					onClick={() => data.handleWorkTag()}
					Input={data.tagInput.work}
				>
					work
				</StyledTagButton>
				<StyledTick>
					<AddIcon
						onClick={() => {
							data.textInput && data.handleAddItem();
						}}
					/>
				</StyledTick>
			</StyledTagIconsContainer>
		</StyledTodoItem>
	);
}

export default AddItem;
