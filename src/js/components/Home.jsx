import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Service";
import Header from "./Header";


const Home = () => {

	const [secreto, setSecreto] = useState('Sabias que .....')

	return (
		<>
		<BrowserRouter>		
			<Header />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/servicios" element={<Service />} />
				<Route path="/contactanos" element={<Contact />} />
			</Routes>
			<p>{secreto}</p>
			<p><button onClick={()=>setSecreto('hay aliens en algun lado de la tierra')}>revelar secreto</button></p>
			<h1>footer</h1>
		</BrowserRouter>
		</>
	);
};

export default Home;