import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    let [all, setAll] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/user').then((response) => {
            setAll(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`).then(() => {
            setAll(all.filter(user => user.id !== id));
        });
    };

    return (
        <div>
            <style jsx>{`
                .user-card {
                    border: 1px solid #ccc;
                    padding: 16px;
                    margin: 8px;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .user-card p {
                    margin: 4px 0;
                }
                .button-group {
                    display: flex;
                    gap: 8px;
                }
                .update-button, .delete-button {
                    padding: 8px 16px;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    text-decoration: none;
                }
                .update-button {
                    background-color: #007bff;
                }
                .update-button:hover {
                    background-color: #0056b3;
                }
                .delete-button {
                    background-color: #dc3545;
                }
                .delete-button:hover {
                    background-color: #c82333;
                }
            `}</style>

            {all?.map((val, i) => {
                let { id, name, email } = val;
                return (
                    <div key={i} className="user-card">
                        <p>id: {id}</p>
                        <p>name: {name}</p>
                        <p>email: {email}</p>
                        <div className="button-group">
                            <Link to={`/update/${id}`}>
                                <button className="update-button">Update</button>
                            </Link>
                            <button className="delete-button" onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllUsers;
