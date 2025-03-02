import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState(null)

  const getMe = async () => {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
    console.log(payload);
    setUserData(payload);
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <div className="card">
        <div>
          {userData ? (
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button onClick={() => {
          window.location.href = '/.auth/logout?post_logout_redirect_uri=/test.html';
        }}>
          Log Out
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
