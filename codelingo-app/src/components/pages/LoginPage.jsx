import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Mail } from 'lucide-react'

const LoginPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simular login/cadastro
    const userData = {
      id: Date.now(),
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      xp: 0,
      streak: 0,
      level: 1,
      completedLessons: [],
      achievements: []
    }
    
    localStorage.setItem('bytequest_user', JSON.stringify(userData))
    setUser(userData)
  }

  const handleGoogleLogin = () => {
    // Simular login com Google
    const userData = {
      id: Date.now(),
      name: 'Usuário Demo',
      email: 'demo@bytequest.com',
      xp: 150,
      streak: 3,
      level: 2,
      completedLessons: ['python-basics-1', 'python-basics-2'],
      achievements: ['first-lesson', 'three-day-streak']
    }
    
    localStorage.setItem('bytequest_user', JSON.stringify(userData))
    setUser(userData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="codelingo-gradient text-white rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold">🚀</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">ByteQuest</h1>
          <p className="text-muted-foreground">Aprenda programação de forma divertida</p>
        </div>

        <Card className="lesson-card">
          <CardHeader>
            <CardTitle>{isLogin ? 'Entrar' : 'Criar Conta'}</CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Entre na sua conta para continuar aprendendo' 
                : 'Crie sua conta e comece a jornada'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-sm font-medium">Nome</label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Senha</label>
                <Input
                  type="password"
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Ou</span>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleGoogleLogin}
              >
                <Mail className="mr-2 h-4 w-4" />
                Continuar com Google
              </Button>
              
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Continuar com GitHub
              </Button>
            </div>

            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin 
                  ? 'Não tem conta? Criar uma' 
                  : 'Já tem conta? Entrar'
                }
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage

