import React from "react";
import styled from "styled-components";
import { IoCheckbox as CompletedCheckBoxIcon } from "react-icons/io5";
import {
	MdCheckBoxOutlineBlank as EmptyCheckBoxIcon,
	MdModeEditOutline as EditIcon,
} from "react-icons/md";
import { GoX as CrossIcon } from "react-icons/go";
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

const Icons = ({ className, children, onClickFunction }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

const StyledIcons = styled(Icons)`
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

function TodoItem({
	item,
	handleCompletedItem,
	handleDeletedItem,
	handleEditItem,
}) {
	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<div onClick={() => handleCompletedItem(item.id, item.completed)}>
						{item.completed ? <CompletedCheckBoxIcon /> : <EmptyCheckBoxIcon />}
					</div>
				</StyledIcons>
				<StyledText> {item.text} </StyledText>
				{item.home && <StyledTag home>home</StyledTag>}
				{item.work && <StyledTag>work</StyledTag>}
			</StyledIconText>
			<div>
				<StyledIcons>
					<EditIcon onCLick={() => handleEditItem(item.id)} />
				</StyledIcons>
				<StyledIcons>
					<CrossIcon
						onClick={() => handleDeletedItem(item.id, item.completed)}
					/>
				</StyledIcons>
			</div>
		</StyledTodoItem>
	);
}

export default TodoItem;
export { StyledTodoItem, StyledIconText, StyledTag, StyledIcons };
