import styled from "styled-components";
import TodoItem from "../todoList/TodoItem";
import { StyledTodoHeader } from "../todoList/TodoList";

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
			{completedList.map((item, index) => (
				<CompletedTodoItem key={index}>
					<TodoItem
						handleCompletedItem={data.handleCompletedItem}
						handleDeletedItem={data.handleDeletedItem}
						handleEditItem={data.handleEditItem}
						item={item}
						key={index}
					/>
				</CompletedTodoItem>
			))}
		</div>
	);
};

export default CompletedList;
