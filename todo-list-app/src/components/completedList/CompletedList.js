import styled from "styled-components";
import TodoItem from "../TodoList/TodoItem";
import { StyledTodoHeader } from "../TodoList/TodoList";
import { AnimatePresence, motion } from "framer-motion";

const StyledCompletedHeader = styled(StyledTodoHeader)`
	margin-top: 1.3rem;
`;

const CompletedTodoItem = styled.div`
	opacity: 60%;
`;

const CompletedList = ({ completedList, data }) => {
	return (
		<div>
			<StyledCompletedHeader>Completed</StyledCompletedHeader>
			<AnimatePresence>
				{completedList.map((item, index) => (
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
						<CompletedTodoItem key={index}>
							<TodoItem
								key={index}
								handleCompletedItem={data.handleCompletedItem}
								handleDeletedItem={data.handleDeletedItem}
								handleEditItem={data.handleEditItem}
								item={item}
							/>
						</CompletedTodoItem>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default CompletedList;
