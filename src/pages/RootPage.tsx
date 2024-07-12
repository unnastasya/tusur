import db from "../db.json";
import { useEffect } from "react";

export const RootPage = () => {
	const books = db.books;

	useEffect(() => {
		let payload;

		fetch("http://localhost:3001").then((response) => {
			console.log("response", response);
		});

		fetch("http://localhost:3001/authors").then((response) => {
			console.log("response", response);
		});

        fetch("http://localhost:3001/location")
	}, []);

	return (
		<div>
			<h1>Список книг</h1>
			{books.map((book) => (
				<>
					<p>{book.code}</p>
					<p>{book.name}</p>
					<p>{book.year}</p>
				</>
			))}
		</div>
	);
};
