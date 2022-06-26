import styled from "styled-components";
import TodoItem from "../todoList/TodoItem";

const StyledCompletedHeader = styled.div`
	margin-top: 1.3rem;
`;

const CompletedList = ({ completedList }) => {
	return (
		<div>
			<StyledCompletedHeader>Completed</StyledCompletedHeader>
			{completedList.map((item, index) => (
				<TodoItem
					// handleCompletedItem={handleCompletedItem}
					item={item}
					key={index}
					// handleDeletedItem={handleDeletedItem}
				/>
			))}
		</div>
	);
};

export default CompletedList;
