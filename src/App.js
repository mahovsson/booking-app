import './App.css';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';
import Navigation from './components/Navigation.js/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Router>
			<Navigation />
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
