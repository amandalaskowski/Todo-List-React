import React, { useState } from "react";

export function TodoList() {
	let [userInput, setUserInput] = useState("");
	let [todolist, setTodolist] = useState([]);

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			let newArr = [...todolist];
			newArr.push(userInput);
			setUserInput("");
			setTodolist(newArr);
		}
	};

	const deleteTodo = event => {
		let newArr = [...todolist];
		newArr.splice(event.target.value, 1);
		setUserInput("");
		setTodolist(newArr);
	};

	React.useEffect(() => {
		const getList = fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/amandalaskowski",
			{
				method: "GET"
			}
		);
		getList
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				const newTodos = data.map(x => x.label);
				setTodolist(newTodos);
			});
	});

	return (
		<div className="body">
			<h1>todos</h1>
			<div className="boxShadow">
				<input
					type="text"
					id="first_name"
					value={userInput}
					onKeyDown={handleKeyPress}
					onChange={event => {
						setUserInput(event.target.value);
					}}></input>
				<ul>
					{todolist.map((task, i) => {
						return (
							<div className="buttonAppear" key={i}>
								<li className="item" key={i}>
									{task}{" "}
									<button value={i} onClick={deleteTodo}>
										X
									</button>
								</li>
							</div>
						);
					})}
					<li className="itemsLeft">{todolist.length} items left</li>
				</ul>
			</div>
		</div>
	);
}
