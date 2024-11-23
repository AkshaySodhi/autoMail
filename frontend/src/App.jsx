import './App.css';

function App() {
  const handleLogin = async () => {
    try {
      window.location.href = "http://localhost:3000/auth/google";
    } catch (err) {
      console.log("error logging in:", err);
    }
  }
  return (
    <>
      <div className="app-container">
        <h1>Login to launch AutoMail</h1>
        <button className='login-btn' onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

export default App
