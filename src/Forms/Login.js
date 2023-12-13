import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Nbar from '../Pages/Nbar';
import './Consult.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch (e) {
            setError(e.message);
        }
    }

    return ( 
   
                <>
                  <div><Nbar/></div>
                  <div className="consulting">
                    <br />
                    <br />
                <h1>Log In</h1>
                {error && <p className="error">{error}</p>}
                <input
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button className= "btn bg-black btn-dark mt-1" onClick={logIn}>Log In</button>
                <Link to="/create">No account yet? Create one</Link>
                </div>
                </>
            );
        }
        
 
export default Login;