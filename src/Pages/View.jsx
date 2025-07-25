import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, view_user } from '../redux/action/Action';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.student);
    


    const [searchField, setSearchField] = useState({
        sname: ''
    });
    const [sortAsc, setSortAsc] = useState(true);

    useEffect(() => {
        dispatch(view_user())
    }, [])

    const searchinput = (event) => {
        const { name, value } = event.target;
        setSearchField({
            ...searchField,
            [name]: value
        });
    };

    const shorting = () => {
        setSortAsc(!sortAsc);
    };

    const deleteuser = (id) => {
        dispatch(DeleteUser(id));
    };

    const edituser = (id) => {
        navigate(`/edit/${id}`);
    };

    const filteredData = users
        .filter((val) =>
            val.sname.toLowerCase().includes(searchField.sname.toLowerCase())
        )
        .sort((a, b) => {
            const nameA = a.sname.toLowerCase();
            const nameB = b.sname.toLowerCase();
            if (nameA > nameB) return sortAsc ? 1 : -1;
            if (nameA < nameB) return sortAsc ? -1 : 1;
            return 0;
        });

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Student List</h2>

                <input
                    type="text"
                    name="sname"
                    placeholder="Search by name..."
                    onChange={searchinput}
                    value={searchField.sname}
                    style={styles.input}
                />

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th onClick={shorting} style={{ cursor: 'pointer' }}>Name ⬍</th>
                            <th>Class</th>
                            <th>Roll no</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map(({ id, sname, rollno, Class, email }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{sname}</td>
                                    <td>{Class}</td>
                                    <td>{rollno}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => deleteuser(id)} style={styles.deleteBtn}>Delete</button>
                                        <button onClick={() => edituser(id)} style={styles.editBtn}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', color: 'gray' }}>
                                    No students found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <Link to="/dashboard" style={styles.addLink}>➕ Add Student</Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px'
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: '800px',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    input: {
        padding: '10px',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
    },
    deleteBtn: {
        padding: '5px 10px',
        marginRight: '10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    editBtn: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    addLink: {
        display: 'inline-block',
        marginTop: '20px',
        textDecoration: 'none',
        color: '#28a745',
        fontWeight: 'bold',
    }
};

export default View;
