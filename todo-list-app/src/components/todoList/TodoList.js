import React from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"

const StyledTodoHeader = styled.div`
	background-color: #d8d8d8;
	/* border: solid grey 1px; */
	border-radius: 0.2em;
	padding: 0.3rem 0.8rem;
	width: max-content;
	font-size: 0.8em;
	color: #464646;
	/* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */
`;

function TodoList({ list, data }) {
	const {
		handleTextInput,
		handleAddItem,
		handleHomeTag,
		handleWorkTag,
		textInput,
		tagInput,
	} = data;

	const addItemObject = {
		handleTextInput,
		handleAddItem,
		handleHomeTag,
		handleWorkTag,
		textInput,
		tagInput,
	};
	return (
		<div>
			<StyledTodoHeader>Todo</StyledTodoHeader>
			<AddItem data={addItemObject} />
			<AnimatePresence>
				{list.map((item, index) => (
					<motion.div
						variants={{
							hidden: {
								opacity: 0,
								y: 25 * index,
							},
							visible: i => ({
								opacity: 1,
								y: 0,
								transition: {
									ease: "easeInOut",
									// type: "spring",
									delay: i * 0.05,
								},
							}),
							removed: {
								opacity: 0,
							},
						}}
						initial="hidden"
						animate="visible"
						exit="removed"
						custom={index}
						key={index}
					>
						<TodoItem
							key={item.id}
							handleCompletedItem={data.handleCompletedItem}
							handleDeletedItem={data.handleDeletedItem}
							handleEditItem={data.handleEditItem}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default TodoList;
export { StyledTodoHeader };
