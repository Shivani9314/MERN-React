import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

function SignUp() {
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(true);
    const users = [
        {
            Id: 'shivani@12',
            password: '123456'
        },
        {
            Id: 'yashraj@13',
            password: '123456'
        },
        {
            Id: 'mohitCh@12',
            password: '123456'
        },
        {
            Id: 'rohan@12',
            password: '123456'
        }
    ]

    function CheckUser(event){
        event.preventDefault();
        let auth = users.find((user) => user.Id===username.current.value);

        if(auth){
            navigate('/logout')
        }

        else{
            navigate('/login');
        }
    
    }

    




  return (
        <div className='Container'>
        <form>
        <input type="text" ref={username}/>
        <input type="password" ref={password}/>
        <button onClick={CheckUser}>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp;