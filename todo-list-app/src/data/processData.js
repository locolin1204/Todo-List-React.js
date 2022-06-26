import { nanoid } from "nanoid";

const jsonData = require("./data.json");

const jsonOriginalTodoListObjectList = jsonData["originalTodoList"];

const originalTodoList = jsonOriginalTodoListObjectList.map(object => {
	object.id = nanoid();
	return object;
});

const jsonOriginalCompletedListData = jsonData["originalCompletedList"];

const originalCompletedList = jsonOriginalCompletedListData.map(object => {
	object.id = nanoid();
	return object;
});

export { originalTodoList, originalCompletedList };