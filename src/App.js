import React from 'react';





import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from './Components/Home/Navigationbar';

import  Home from './Components/Home/Home';
import { About } from './Components/About/About';
import {NoMatch} from "./NoMatch";
import Feed from './Components/Audience/Feed';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Audience/Profile';



import Creater from "./Components/Creators/Creators";
import Design from "./Components/Design/Design";
import News from './Components/News/NewsFeed';
import Users from './Components/Audience/Users';

//imporitng CVS
import Monica from './Components/Hire/MonicaCV';
import Richard from './Components/Hire/RichardCV';
import Jared from './Components/Hire/JaredCV';
import Erlich from './Components/Hire/EricCV';
import Dinesh from './Components/Hire/DineshCV';
import Elaine from './Components/Hire/ThandolwethuCV';

function App() {
return (

<div className='App'>
  <NavigationBar/>
  
			<Router>
				<Routes> 
				
				<Route  exact path="/My-React-App" element={ <Home/>} />
				<Route  exact path="/" element={ <Home/>} />
				<Route  path="/about" element={ <About/>} />
				<Route  path="/contact" element={ <Contact/>} />
				<Route  path="/create" element={ <Creater/>} />
				<Route  path="/play" element={ <Feed/>} />
				<Route  path="/news" element={ <News/>} />
				<Route  path="/design" element={ <Design/>} />


				<Route  path="/Hire/MonicaCV" element={ <Monica/>} />
				<Route  path="/Hire/RichardCV" element={ <Richard/>} />
				<Route  path="/Hire/ElaineCV" element={ <Elaine/>} />
				<Route  path="/Hire/JaredCV" element={ <Jared/>} />
				<Route  path="/Hire/DineshCV" element={ <Dinesh/>} />
				<Route  path="/Hire/Erlich" element={ <Erlich/>} />
				
				<Route element={NoMatch} />

				</ Routes>
				
				
			</Router>

</div>
	
);
}

export default App;
