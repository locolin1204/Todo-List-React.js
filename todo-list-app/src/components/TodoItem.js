import React from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { GoX } from "react-icons/go";

import styled from "styled-components";
import { IconContext } from "react-icons";

const StyledTodoItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid #f0f0f0;
	font-size: 1.1rem;
`;

const StyledText = styled.div``;

const Icons = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export const StyledIcons = styled(Icons)`
	padding: 0.5rem;
	cursor: pointer;
`;

const StyledIconText = styled.div`
	display: flex;
	align-items: center;
`;

const StyledTag = styled.button`
	--home-tag-color: #0059d6;
	--work-tag-color: #1c9f11;
	background-color: #e2eeff;
	font-size: 0.9rem;
	padding: 0.4rem 1.3rem;
	border: solid 1px;
	border-radius: 50rem;
	margin-left: 1.3rem;

	${({ home }) => {
		if (home) {
			return `
				color: var(--home-tag-color);
				border-color: var(--home-tag-color);
				background-color: #e2eeff;
			`;
		} else {
			return `
				color: var(--work-tag-color);
				border-color: var(--work-tag-color);
				background-color: #e1ffde;
			`;
		}
	}}
`;

function TodoItem({ item, handleCompletedItem, handleDeletedItem }) {
	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<MdCheckBoxOutlineBlank onClick={() => handleCompletedItem()} />
				</StyledIcons>
				<StyledText> {item.text} </StyledText>
				{item.home && <StyledTag home>home</StyledTag>}
				{item.work && <StyledTag>work</StyledTag>}
			</StyledIconText>
			<StyledIcons>
				<GoX onClick={() => handleDeletedItem(item.id)} />
			</StyledIcons>
		</StyledTodoItem>
	);
}

export default TodoItem;
export { StyledTodoItem, StyledIconText, StyledTag };
