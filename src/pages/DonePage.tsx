import db from "../db.json";

export const DonePage = () => {
	const doneBooks = db.doneBooks;
	return (
		<div>
			<h1>Список выданных книг</h1>
			{doneBooks.map((book) => (
				<>
					<p>{book.id}</p>
					<p>{book.idNumber}</p>
					<p>{book.name}</p>
					<p>{book.fio}</p>
					<p>{book.dateOfIssue}</p>
					<p>{book.dateOfReturn}</p>
				</>
			))}
		</div>
	);
};
