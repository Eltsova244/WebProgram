import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      alert('Пожалуйста, заполните все поля')
      return
    }
    
    alert(`Email: ${email}\nPassword: ${password}`)
    
    // Очистка полей после входа (опционально)
    setEmail('')
    setPassword('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <>
      <div>
        <h1>Вход</h1>
        <input 
          className='FDJ' 
          type="email" 
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <input 
          className='FDJ' 
          type="password" 
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className='FDJ' onClick={handleLogin}>
          Войти
        </button>
      </div>
    </>
  )
}

export default App
