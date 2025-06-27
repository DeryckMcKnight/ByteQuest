import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'

// Importar componentes das páginas
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import LessonPage from './components/pages/LessonPage'
import ProfilePage from './components/pages/ProfilePage'
import Layout from './components/layout/Layout'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular verificação de autenticação
    const checkAuth = () => {
      const savedUser = localStorage.getItem('bytequest_user')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setLoading(false)
    }
    
    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando ByteQuest...</p>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <Routes>
            <Route 
              path="/login" 
              element={<LoginPage setUser={setUser} />} 
            />
            <Route 
              path="/" 
              element={
                user ? (
                  <Layout user={user} setUser={setUser}>
                    <HomePage user={user} />
                  </Layout>
                ) : (
                  <LoginPage setUser={setUser} />
                )
              } 
            />
            <Route 
              path="/lesson/:lessonId" 
              element={
                user ? (
                  <Layout user={user} setUser={setUser}>
                    <LessonPage user={user} />
                  </Layout>
                ) : (
                  <LoginPage setUser={setUser} />
                )
              } 
            />
            <Route 
              path="/profile" 
              element={
                user ? (
                  <Layout user={user} setUser={setUser}>
                    <ProfilePage user={user} />
                  </Layout>
                ) : (
                  <LoginPage setUser={setUser} />
                )
              } 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

