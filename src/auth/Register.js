import React, { Fragment, useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
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
