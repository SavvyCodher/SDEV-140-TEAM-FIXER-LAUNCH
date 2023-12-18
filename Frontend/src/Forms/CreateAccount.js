import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Consult.css'
import Nbar from '../Pages/Nbar';

const CreateAccount = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState('');
    
        const navigate = useNavigate();
    
        const createAccount = async () => {
            try {
                if (password !== confirmPassword) {
                    setError('Password and confirm password do not match');
                    return;
                }
    
                await createUserWithEmailAndPassword(getAuth(), email, password);
                navigate('/login');
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
            <h1>Create Account</h1>
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
            <input
                type="password"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            <button className= "btn bg-black btn-dark mt-1" onClick={createAccount}>Create Account</button>
            <Link to="/login">Have an account? Log In Here.</Link>
            </div>

      
            </>
        );
    
    }
    

 
export default CreateAccount;