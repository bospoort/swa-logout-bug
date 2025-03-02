import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null)

  const getMe = async () => {
    const response = await fetch('/.auth/me');
    const payload = await response.json();
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
          window.location.href = '/.auth/logout?post_logout_redirect_uri=/login.html';
        }}>
          Log Out
        </button>
      </div>
    </>
  )
}

export default App
