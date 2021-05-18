import './App.css';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';
import Navigation from './components/Navigation.js/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
