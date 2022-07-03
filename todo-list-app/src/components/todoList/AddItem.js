import React from "react";
import { StyledTodoItem } from "./TodoItem";
import styled from "styled-components";
import AddItemTagIcons from "./components/AddItemTagIcons";

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

function AddItem({ data }) {
	const { tagInput, textInput, handleHomeTag, handleWorkTag, handleAddItem } = data;

	const iconsChildrenObject = {
		tagInput,
		textInput,
		handleHomeTag,
		handleWorkTag,
		handleAddItem,
	};

	const itemInputRef = React.useRef(null);

	React.useEffect(() => {
		itemInputRef.current.focus();
	});

	return (
		<StyledTodoItem>
			<StyledInput
				ref={itemInputRef}
				readOnly={data.textInput.readOnly}
				type="text"
				placeholder="Type here..."
				onChange={data.handleTextInput}
				value={data.textInput.text}
				onKeyPress={e => {
					if (e.key === "Enter") {
						data.textInput.text && data.handleAddItem();
					}
				}}
			/>

			<AddItemTagIcons data={iconsChildrenObject} />
		</StyledTodoItem>
	);
}

export default AddItem;
