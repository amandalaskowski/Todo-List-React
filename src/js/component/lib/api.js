export const getTodoList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/amandalaskowski", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export const updateTodoList = todos => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/amandalaskowski", {
		method: "PUT",
		body: JSON.stringify(todos.map(x => ({ label: x, done: false }))),
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export const createTodoList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/amandalaskowski", {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export const deleteTodoList = () => {
	return fetch("https://assets.breatheco.de/apis/fake/todos/user/amandalaskowski", {
		method: "DEL",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json"
		}
	});
};