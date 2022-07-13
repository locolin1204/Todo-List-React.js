import React from "react";
import styled from "styled-components";
import { IoCheckbox as CompletedCheckBoxIcon } from "react-icons/io5";
import { MdCheckBoxOutlineBlank as EmptyCheckBoxIcon } from "react-icons/md";
import { IconContext } from "react-icons";
import ItemTagIcons from "./components/ItemTagIcon";

const StyledTodoItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	border-bottom: 1px solid #f0f0f0;
	font-size: 1.1rem;
`;

const Icons = ({ className, children }) => (
	<IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

const StyledIcons = styled(Icons)`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;
	font-size: inherit;
`;

const StyledIconText = styled.div`
	display: flex;
	align-items: center;
`;

function TodoItem({
	item,
	handleDeletedItem,
	handleCompletedItem,
	handleEditItem,
}) {
	const itemTagIconsChildrenObject = {
		handleEditItem,
		handleDeletedItem,
	};

	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<div onClick={() => handleCompletedItem(item.id)}>
						{item.completed ? <CompletedCheckBoxIcon /> : <EmptyCheckBoxIcon />}
					</div>
				</StyledIcons>
				<div> {item.text} </div>
			</StyledIconText>
			<ItemTagIcons item={item} data={itemTagIconsChildrenObject} />
		</StyledTodoItem>
	);
}

export default TodoItem;
export { StyledTodoItem, StyledIconText, StyledIcons };
