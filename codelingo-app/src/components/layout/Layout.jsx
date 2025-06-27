import { User, Trophy, Settings, LogOut, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../../contexts/ThemeContext'

const Layout = ({ children, user, setUser }) => {
  const { theme, toggleTheme } = useTheme()

  const handleLogout = () => {
    localStorage.removeItem('bytequest_user')
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="codelingo-gradient text-white rounded-lg p-2 mr-3">
                <span className="text-xl font-bold">🚀</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">ByteQuest</h1>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="xp-bar h-2 w-20 rounded-full"></div>
                <span className="text-sm font-medium text-muted-foreground">
                  {user?.xp || 0} XP
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{user?.streak || 0}</span>
              </div>

              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{user?.name}</span>
              </div>

              {/* Botão de tema */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

export default Layout

