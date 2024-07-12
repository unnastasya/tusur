import { AddPage } from "./pages/AddPage";
import { RootPage } from "./pages/RootPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./shared/components/Menu/Menu";
import { DonePage } from "./pages/DonePage";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<RootPage />} />
				<Route path="/add" element={<AddPage />} />
				<Route path="/done" element={<DonePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
