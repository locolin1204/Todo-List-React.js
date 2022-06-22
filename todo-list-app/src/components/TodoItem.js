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

function TodoItem({ text, id }) {
	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<MdCheckBoxOutlineBlank />
				</StyledIcons>
				<StyledText> {text} </StyledText>
			</StyledIconText>
			<StyledIcons>
				<GoX />
			</StyledIcons>
		</StyledTodoItem>
	);
}

export default TodoItem;
export { StyledTodoItem, StyledIconText };
