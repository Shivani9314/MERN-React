import { useNavigate, useParams } from 'react-router-dom'

function Logout() {
    
    const navigate = useNavigate();


  return (
    <div>
        <h1>Hello Precious User</h1>
        <button onClick={() => navigate('/login')}>Logout</button>
    </div>
  )
}

  export default Logout