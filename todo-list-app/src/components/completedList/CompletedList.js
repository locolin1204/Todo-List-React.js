import styled from "styled-components";
import TodoItem from "../todoList/TodoItem";

const StyledCompletedHeader = styled.div`
	margin-top: 1.3rem;
`;

const CompletedTodoItem = styled.div`
	opacity: 60%;
`;

const CompletedList = ({
	completedList,
	handleCompletedItem,
	handleDeletedItem,
}) => {
	return (
		<div>
			<StyledCompletedHeader>Completed</StyledCompletedHeader>
			{completedList.map((item, index) => (
				<CompletedTodoItem key={index}>
					<TodoItem
						handleCompletedItem={handleCompletedItem}
						item={item}
						key={index}
						handleDeletedItem={handleDeletedItem}
					/>
				</CompletedTodoItem>
			))}
		</div>
	);
};

export default CompletedList;
