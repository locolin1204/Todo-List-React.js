import React from "react";
import styled from "styled-components";
import { MdOutlineAdd as AddIcon } from "react-icons/md";
import { StyledIcons } from "../TodoItem";
import { StyledTag, StyledItemTagIcons } from "./ItemTagIcon";

const StyledAddIcon = styled(StyledIcons)`
	margin-left: 2rem;
`;

const StyledTagButton = styled(StyledTag)`
	--tag-color-inactive: #a7a7a7;
	--tag-color-home-active: #0059d6;
	--tag-color-work-active: #1c9f11;
	border: none;
	cursor: pointer;

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

function AddItemTagIcons({data}) {
	return (
		<StyledItemTagIcons>
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
			<StyledAddIcon>
				<AddIcon
					onClick={() => {
						data.textInput.text && data.handleAddItem();
					}}
				/>
			</StyledAddIcon>
		</StyledItemTagIcons>
	);
}

export default AddItemTagIcons;