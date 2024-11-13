import React, { useState,useEffect } from 'react'
import "./Profile.css"
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../reduc/loginSlice.js';

export const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formInput, setFormInput] = useState({
        username: "", password: ""
    });
    const profileData = useSelector((state) => state.loginInfo.loginData);
    console.log("profileData", profileData);
    console.log("profileData.username", profileData.username);

    const dispatch = useDispatch();

    useEffect(() => {
        if (profileData) {
            setFormInput({
                username: profileData.username,
                password: profileData.password
            });
        }
    }, [profileData]);

    const handleSave = () => {
        dispatch(setLogin(formInput));
        setIsEditing(false)

    };

    const handleCancel = () => {
        console.log('Edit canceled');
    };
    const handleChange = (e) => {
        console.log("submit", e.target.value);
        const { name, value } = e.target;
        setFormInput((previous) => {
            return {
                ...previous, [name]: value
            }
        })
    }
    return (
        <>
            <div className="profile-container">
                <div className="card">
                   { isEditing ? <h2>Edit Profile page</h2>: <h2> Profile page</h2>}
                    {isEditing ? (<>
                        <input type="text" name='username' value={formInput.username} onChange={handleChange} placeholder="Username" />
                        <input type="text" name='password' value={formInput.password} onChange={handleChange} placeholder="Password" />
                        <div className="button-group">
                            <button onClick={handleSave}>Save Changes</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div></>) : (<>
                            <p><strong>Username:</strong> {profileData.username}</p>
                            <p><strong>password:</strong> {profileData.password}</p>

                            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                        </>)}
                </div>
            </div>
        </>
    )
}
