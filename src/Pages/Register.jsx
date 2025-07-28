import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_student } from '../redux/action/Action';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [forminput, setForminput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const changeInput = (event) => {
        const { name, value } = event.target;
        setForminput({
            ...forminput,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add_student(forminput));
        navigate("/login");
    };

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
                <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '15px' }}>
                    <h3 className="text-center mb-4 text-primary fw-bold">Register User</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={forminput.name}
                                onChange={changeInput}
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={forminput.email}
                                onChange={changeInput}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={forminput.password}
                                onChange={changeInput}
                                className="form-control"
                                placeholder="Create a password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-semibold">Register</button>
                    </form>
                    <div className="text-center mt-3">
                        <small>
                            Already have an account? <Link to="/login">Login here</Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">StudentApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Register;

