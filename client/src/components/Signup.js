import React, { useState } from "react"



function Signup ({ errors, handleSignUp }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [bio, setBio] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        handleSignUp(username, password, passwordConfirmation, displayName, profilePic, bio)
    }

    return (
        <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
            <label>
               <h3>Username:
               <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
               </h3>
                
            </label>
            <label>
                <h3>Password:
                <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </h3>
              
            </label>
            <label>
               <h3>Password Confirmation:
               <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
               </h3>

            </label>
            <br />
            <label>
                Display Name - This Is The Name Other Users Will See
                <input 
                type="text"
                id="display_name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <br />
            <label>
            <h2>Bio:
              <p style={{fontSize:"75%"}}>Write A Little About Yourself</p>
                 <textarea 
                 rows="12"
                 cols="80"
                 type="text"
                 id="content"
                 value={bio}
                 onChange={(e) => setBio(e.target.value)}
                 />
             </h2>

            </label>
            <br />
            <label>
                Profile Picture URL:
                <input 
                type="text"
                id="profilePic"
                value={profilePic}
                style={{width:"400px"}}
                onChange={(e) => setProfilePic(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">CREATE ACCOUNT</button>
            <ul>{errors && errors.map((err) => (
                <li key={err}>{err}</li>
            ))}</ul>
        </form>
    )

}

export default Signup