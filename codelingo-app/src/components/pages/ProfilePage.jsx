import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Trophy, 
  Target, 
  Star, 
  Calendar, 
  Code, 
  Award,
  TrendingUp,
  Clock,
  Zap
} from 'lucide-react'

const ProfilePage = ({ user }) => {
  const [activeTab, setActiveTab] = useState('stats')

  // Dados simulados de conquistas
  const achievements = [
    {
      id: 'first-lesson',
      title: 'Primeira Lição',
      description: 'Complete sua primeira lição',
      icon: Star,
      unlocked: user.completedLessons.length > 0,
      date: '2024-01-15'
    },
    {
      id: 'three-day-streak',
      title: 'Sequência de 3 Dias',
      description: 'Estude por 3 dias consecutivos',
      icon: Target,
      unlocked: user.streak >= 3,
      date: user.streak >= 3 ? '2024-01-17' : null
    },
    {
      id: 'python-master',
      title: 'Mestre do Python',
      description: 'Complete todas as lições de Python',
      icon: Code,
      unlocked: false,
      date: null
    },
    {
      id: 'speed-learner',
      title: 'Aprendiz Veloz',
      description: 'Complete 5 lições em um dia',
      icon: Zap,
      unlocked: false,
      date: null
    }
  ]

  // Estatísticas semanais simuladas
  const weeklyStats = [
    { day: 'Seg', xp: 50, completed: true },
    { day: 'Ter', xp: 75, completed: true },
    { day: 'Qua', xp: 25, completed: true },
    { day: 'Qui', xp: 0, completed: false },
    { day: 'Sex', xp: 0, completed: false },
    { day: 'Sáb', xp: 0, completed: false },
    { day: 'Dom', xp: 0, completed: false }
  ]

  const totalLessons = 15 // Total de lições disponíveis
  const completedLessons = user.completedLessons.length
  const completionRate = (completedLessons / totalLessons) * 100

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header do Perfil */}
      <Card className="lesson-card">
        <CardContent className="p-6">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
              <p className="text-muted-foreground mb-4">{user.email}</p>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{user.level}</div>
                  <div className="text-sm text-muted-foreground">Nível</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{user.xp}</div>
                  <div className="text-sm text-muted-foreground">XP Total</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{user.streak}</div>
                  <div className="text-sm text-muted-foreground">Dias Seguidos</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navegação por Abas */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg">
        <Button
          variant={activeTab === 'stats' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('stats')}
          className="flex-1"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Estatísticas
        </Button>
        <Button
          variant={activeTab === 'achievements' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('achievements')}
          className="flex-1"
        >
          <Trophy className="h-4 w-4 mr-2" />
          Conquistas
        </Button>
        <Button
          variant={activeTab === 'activity' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('activity')}
          className="flex-1"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Atividade
        </Button>
      </div>

      {/* Conteúdo das Abas */}
      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progresso Geral */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Progresso Geral</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Lições Completadas</span>
                  <span>{completedLessons}/{totalLessons}</span>
                </div>
                <Progress value={completionRate} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">{Math.round(completionRate)}%</div>
                  <div className="text-xs text-muted-foreground">Concluído</div>
                </div>
                <div>
                  <div className="text-lg font-bold">{totalLessons - completedLessons}</div>
                  <div className="text-xs text-muted-foreground">Restantes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* XP por Linguagem */}
          <Card className="lesson-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>XP por Linguagem</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Python</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm font-medium">120 XP</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">JavaScript</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                  <span className="text-sm font-medium">30 XP</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm">HTML/CSS</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-muted rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <span className="text-sm font-medium">0 XP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atividade Semanal */}
          <Card className="lesson-card md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Atividade desta Semana</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {weeklyStats.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                    <div 
                      className={`h-12 rounded-lg flex items-center justify-center text-xs font-medium ${
                        day.completed 
                          ? 'bg-secondary text-secondary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {day.xp > 0 ? `${day.xp} XP` : '-'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <Card 
                key={achievement.id} 
                className={`lesson-card ${
                  achievement.unlocked ? 'border-accent' : 'opacity-60'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${
                      achievement.unlocked 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{achievement.title}</h3>
                        {achievement.unlocked && (
                          <Badge variant="secondary" className="text-xs">
                            Desbloqueado
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                      {achievement.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Desbloqueado em {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {activeTab === 'activity' && (
        <Card className="lesson-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Atividade Recente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completou "Variáveis e Tipos"</p>
                <p className="text-xs text-muted-foreground">Hoje às 14:30</p>
              </div>
              <Badge variant="secondary">+50 XP</Badge>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Desbloqueou "Sequência de 3 Dias"</p>
                <p className="text-xs text-muted-foreground">Ontem às 16:45</p>
              </div>
              <Trophy className="h-4 w-4 text-accent" />
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Iniciou trilha de Python</p>
                <p className="text-xs text-muted-foreground">3 dias atrás</p>
              </div>
              <Star className="h-4 w-4 text-primary" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ProfilePage

