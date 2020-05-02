import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList";
import Navbar from "./Navbar.js";

//create your first component
export function Home() {
	return (
		<div className="contain">
			<div className="header">
				<Navbar />
			</div>
			<div className="body">
				<TodoList />
			</div>
		</div>
	);
}
