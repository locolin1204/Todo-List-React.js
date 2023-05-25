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
	&:hover {
		background-color: #f7f7f7;
		border-radius: 50%;
	}
`;

const StyledIconText = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const StyledInputText = styled.input`
	border: none;
	outline: none;
	background: none;
	font-size: inherit;
	width:100%;
	&::placeholder {
		color: black;
	}
	&:focus{
		color:#737373;
		font-size:600;
	}
`;

function TodoItem(
	{
		item,
		handleDeletedItem,
		handleCompletedItem,
		handleEditItem,
		handleTagChange,
	},
) {

	const handleEditItemFocus = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
	} else {
			console.error(`Could not focus input`);
	}
	}

	const itemTagIconsChildrenObject = {
		handleEditItem,
		handleDeletedItem,
		handleTagChange,
		handleEditItemFocus,
	};

	const inputRef = React.useRef();


	return (
		<StyledTodoItem>
			<StyledIconText>
				<StyledIcons>
					<div onClick={() => handleCompletedItem(item.id)}>
						{item.completed ? <CompletedCheckBoxIcon /> : <EmptyCheckBoxIcon />}
					</div>
				</StyledIcons>
				{/* <div> {item.text} </div> */}
				<StyledInputText
					value={item.text}
					onChange={e => handleEditItem(e, item.id)}
					ref={inputRef}
				/>
			</StyledIconText>
			<ItemTagIcons item={item} data={itemTagIconsChildrenObject} />
		</StyledTodoItem>
	);
}

export default React.forwardRef(TodoItem);
export { StyledTodoItem, StyledIconText, StyledIcons };
