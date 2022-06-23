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
	--tag-color: #0059d6;
	color: var(--tag-color);
	background-color: #e2eeff;
	font-size: 0.9rem;
	padding: 0.4rem 1.3rem;
	border: solid var(--tag-color) 1px;
	border-radius: 50rem;
	margin-left: 1.3rem;
`;

function TodoItem({ item }) {
	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<MdCheckBoxOutlineBlank />
				</StyledIcons>
				<StyledText> {item.text} </StyledText>
				{item.home && <StyledTag>home</StyledTag>}
				{item.work && <StyledTag>work</StyledTag>}
			</StyledIconText>
			<StyledIcons>
				<GoX />
			</StyledIcons>
		</StyledTodoItem>
	);
}

export default TodoItem;
export { StyledTodoItem, StyledIconText, StyledTag };
