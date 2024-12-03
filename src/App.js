import Header from "./components/Header";
import "./assets/styles/style.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MobileHeader from "./components/MobileHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "./components/Food";
import Retail from "./components/Retail";
import Community from "./components/Community";
function App() {
	return (
		<>
			<Header />
			<div className="md:hidden">
				<BrowserRouter>
					<MobileHeader />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/food' element={<Food />} />
						<Route exact path='/retail' element={<Retail />} />
						<Route exact path='/community' element={<Community />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
