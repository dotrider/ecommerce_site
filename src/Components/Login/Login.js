import React,{useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setUser } from '../../redux/reducer';
import axios from 'axios';
import './Login.scss';



const Login = () => {

    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [toggle, setToggle] = useState(false);


          const dispatch = useDispatch();


    const register = () => {
        console.log('register', {email, password})
        axios.post('/auth/register', {email, password}).then(res => {
            console.log('register', res.data)
            dispatch(setUser(res.data))
        })
    }

    const login = () => {
        axios.post('/auth/login', {email, password}).then(res => {
            console.log('login', res.data)
            dispatch(setUser(res.data))
        })
    }
    
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <section className='login'>
                <div className='login-container'>
                {(!toggle)?
                <div className='login-inner-container'>
                    <div className='auth login'>
                        <form className='inner-pad' onSubmit={e => { e.preventDefault()
                            login()}}>
                            <label>Email Address: </label>
                            <input name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                            <label>Password: </label>
                            <input name='password' value={password} onChange={e => setPassword(e.target.value)}/>
                            <span type='submit'>Login</span>
                        </form>
                    </div>
                    <div className='new-customer'>
                        <div className='inner-pad'>
                            <p>
                            New Customer? Create an account with us, It's easy!
                            </p>
                        <span onClick={handleToggle}>Register</span></div>
                        </div>
                </div>
                :
                <div className='auth register' >
                    <form onSubmit={e => { e.preventDefault()
                        register()}}>
                        <label>Email Address: </label>
                        <input name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <label>Password: </label>
                        <input name='password' value={password} onChange={e => setPassword(e.target.value)}/>
                        <span type='submit'>Register</span>
                    </form>
                </div>
                }
                </div>

        </section>
    )
}

export default Login;