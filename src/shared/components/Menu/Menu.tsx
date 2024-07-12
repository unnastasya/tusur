import { Link } from "react-router-dom";

interface IMenu {
	text: string;
	link: string;
}

const MenuMap: IMenu[] = [
	{
		text: "Главная",
		link: "/",
	},
	{
		text: "Добавление",
		link: "/add",
	},
	{
		text: "Выданные",
		link: "/done",
	},
	{
		text: "Справочник",
		link: "/directory",
	},
];

export const Menu = () => {
	return (
		<div>
			{MenuMap &&
				MenuMap.map((element: IMenu) => (
					<li key={element.text}>
						<Link to={element.link}>{element.text}</Link>
					</li>
				))}
		</div>
	);
};
