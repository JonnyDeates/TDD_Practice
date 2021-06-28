import React, {FormEvent, useState} from "react";
import Modal from "../../Components/Modal/Modal";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isShown, toggleShown] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        toggleShown(true);
    }

    return <>
        <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <label html-for={'username'}>Username</label>
            <input type='text' aria-label={'Username'} placeholder={'Enter Username'} value={username}
                   onChange={(e) => setUsername(e.target.value)}/>
            <label html-for={'password'}>Password</label>
            <input type='password' aria-label={'Password'} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <button type={'submit'}>Submit</button>
        </form>
        {isShown && <Modal header={'Submitted!'} description={username} toggle={toggleShown}/>}
    </>
}

export default Login;