import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API}/register`,
				{
					name,
					email,
					password,
				}
			);
			console.log('REGISTER USER ===> ', res);
			toast.success('Register success. Please login!', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			history.push('/login');
		} catch (err) {
			console.log(err);
			if (err.response.status === 400) toast.error(err.response.data);
		}

		setName('');
		setEmail('');
		setPassword('');
	};

	return (
		<>
			<div className='container-fluid bg-secondary p-5 text-center'>
				<h1>Register Page</h1>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<RegisterForm
							handleSubmit={handleSubmit}
							name={name}
							setName={setName}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
