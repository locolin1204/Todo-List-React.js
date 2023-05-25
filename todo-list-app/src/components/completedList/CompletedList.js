import styled from "styled-components";
import TodoItem from "../todoList/TodoItem";
import { StyledTodoHeader } from "../todoList/TodoList";
import { AnimatePresence, motion } from "framer-motion";

const StyledCompletedHeader = styled(StyledTodoHeader)`
	margin-top: 1.3rem;
`;

const CompletedTodoItem = styled.div`
	opacity: 60%;
`;

const CompletedList = ({ completedList, data, hasListRendered}) => {
	return (
		<div>
			<StyledCompletedHeader>Completed</StyledCompletedHeader>
			<AnimatePresence>
				{completedList.map((item, index) => (
					<motion.div
						variants={{
							hidden: i => ({
								opacity: 0,
								y: 25 * i,
							}),
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
						initial={hasListRendered.current ? "visible" : "hidden"}
						animate="visible"
						exit="removed"
						custom={index}
						key={item.id}
					>
						<CompletedTodoItem key={item.id}>
							<TodoItem
								key={item.id}
								handleCompletedItem={data.handleCompletedItem}
								handleDeletedItem={data.handleDeletedItem}
								handleEditItem={data.handleEditItem}
								handleTagChange={data.handleTagChange}
								item={item}
								isEditing={data.isEditing}

								handleEditItemFocus={data.handleEditItemFocus}
							/>
						</CompletedTodoItem>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default CompletedList;
