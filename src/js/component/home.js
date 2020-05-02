import React from "react";

//include images into your bundle
import TodoList from "./TodoList";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
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

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
