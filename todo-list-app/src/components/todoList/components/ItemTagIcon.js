import React from "react";
import { MdModeEditOutline as EditIcon } from "react-icons/md";
import { GoX as CrossIcon } from "react-icons/go";
import { StyledIcons } from "../TodoItem";
import styled from "styled-components";

const StyledItemTagIcons = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledTag = styled.button`
	--home-tag-color: #0059d6;
	--work-tag-color: #1c9f11;
	background-color: #e2eeff;
	border: none;
	font-size: 0.9rem;
	padding: 0.4rem 1.3rem;
	border-radius: 50rem;
	margin-right: 0.8rem;
	width: 5rem;

	${({ home, isTag }) => {
		if (!isTag) {
			return `
	background-color: white;
color:#a7a7a7;
				`;
		}
		if (home) {
			return `
				color: var(--home-tag-color);
				background-color: #e2eeff;
			`;
		} else {
			return `
				color: var(--work-tag-color);
				background-color: #e1ffde;
			`;
		}
	}}
	
`;


function ItemTagIcons({ item, data }) {
	return (
		<StyledItemTagIcons>
			<StyledTag home isTag={item.home}>home</StyledTag>
			<StyledTag isTag={item.work}>work</StyledTag>

			<StyledIcons>
				<EditIcon onClick={() => data.handleEditItem(item.id)} />
				<CrossIcon
					onClick={() => data.handleDeletedItem(item.id)}
				/>
			</StyledIcons>
		</StyledItemTagIcons>
	);
}

export default ItemTagIcons;
export { StyledTag, StyledItemTagIcons };