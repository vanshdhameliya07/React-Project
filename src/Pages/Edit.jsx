import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Edit_user, Update_user } from '../redux/action/Action';

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const single = useSelector((state) => state.student);

    
    const [forminput, setForminput] = useState({
        sname: '',
        Class: '',
        email: '',
        rollno: ''
    });

    useEffect(() => {
        dispatch(Edit_user(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (single.length > 0) {
            setForminput(single[0]);
        }
    }, [single]);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setForminput({
            ...forminput,
            [name]: value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(Update_user(forminput));
        navigate('/view');
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Edit Student</h2>
                <form onSubmit={handlesubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Student Name</label>
                        <input
                            type="text"
                            name="sname"
                            value={forminput.sname}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Class</label>
                        <input
                            type="text"
                            name="Class"
                            value={forminput.Class}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={forminput.email}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="number"
                            name="rollno"
                            value={forminput.rollno}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Update</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '380px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '25px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: '500',
        color: '#444',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        outline: 'none',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default Edit;
