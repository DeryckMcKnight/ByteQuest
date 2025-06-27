import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Code, 
  Globe, 
  Palette, 
  Play, 
  Lock, 
  CheckCircle, 
  Star,
  Trophy,
  Target
} from 'lucide-react'
import Leaderboard from '../game/Leaderboard'

const HomePage = ({ user }) => {
  const navigate = useNavigate()
  
  // Dados das trilhas de aprendizado
  const skillTracks = [
    {
      id: 'python',
      title: 'Python Básico',
      description: 'Aprenda os fundamentos da programação com Python',
      icon: Code,
      color: 'bg-blue-500',
      lessons: [
        { id: 'python-basics-1', title: 'Variáveis e Tipos', completed: user.completedLessons.includes('python-basics-1'), locked: false },
        { id: 'python-basics-2', title: 'Operadores', completed: user.completedLessons.includes('python-basics-2'), locked: !user.completedLessons.includes('python-basics-1') },
        { id: 'python-basics-3', title: 'Condicionais', completed: false, locked: !user.completedLessons.includes('python-basics-2') },
        { id: 'python-basics-4', title: 'Loops', completed: false, locked: true },
        { id: 'python-basics-5', title: 'Funções', completed: false, locked: true }
      ]
    },
    {
      id: 'javascript',
      title: 'JavaScript Essencial',
      description: 'Domine a linguagem da web',
      icon: Globe,
      color: 'bg-yellow-500',
      lessons: [
        { id: 'js-basics-1', title: 'Introdução ao JS', completed: false, locked: false },
        { id: 'js-basics-2', title: 'DOM Manipulation', completed: false, locked: true },
        { id: 'js-basics-3', title: 'Eventos', completed: false, locked: true },
        { id: 'js-basics-4', title: 'Async/Await', completed: false, locked: true }
      ]
    },
    {
      id: 'html-css',
      title: 'HTML & CSS',
      description: 'Crie páginas web bonitas e responsivas',
      icon: Palette,
      color: 'bg-pink-500',
      lessons: [
        { id: 'html-basics-1', title: 'Estrutura HTML', completed: false, locked: false },
        { id: 'css-basics-1', title: 'Estilos CSS', completed: false, locked: true },
        { id: 'css-basics-2', title: 'Flexbox', completed: false, locked: true },
        { id: 'css-basics-3', title: 'Grid Layout', completed: false, locked: true }
      ]
    }
  ]

  const handleLessonClick = (lesson) => {
    if (!lesson.locked) {
      navigate(`/lesson/${lesson.id}`)
    }
  }

  const getTrackProgress = (track) => {
    const completed = track.lessons.filter(lesson => lesson.completed).length
    return (completed / track.lessons.length) * 100
  }

  return (
    <div className="space-y-8">
      {/* Header com estatísticas */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">
          Olá, {user.name}! 👋
        </h1>
        <p className="text-muted-foreground mb-6">
          Continue sua jornada de aprendizado
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Card className="lesson-card">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.xp}</div>
              <div className="text-sm text-muted-foreground">XP Total</div>
            </CardContent>
          </Card>
          
          <Card className="lesson-card">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.streak}</div>
              <div className="text-sm text-muted-foreground">Dias Seguidos</div>
            </CardContent>
          </Card>
          
          <Card className="lesson-card">
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{user.level}</div>
              <div className="text-sm text-muted-foreground">Nível</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trilhas de Aprendizado */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Trilhas de Aprendizado</h2>
        
        {skillTracks.map((track) => {
          const Icon = track.icon
          const progress = getTrackProgress(track)
          
          return (
            <Card key={track.id} className="lesson-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${track.color} text-white rounded-lg p-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{track.title}</h3>
                      <p className="text-muted-foreground">{track.description}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {track.lessons.filter(l => l.completed).length}/{track.lessons.length}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                {/* Árvore de Lições */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {track.lessons.map((lesson, index) => (
                    <Button
                      key={lesson.id}
                      variant={lesson.completed ? "default" : lesson.locked ? "secondary" : "outline"}
                      className={`skill-node h-20 flex flex-col items-center justify-center relative ${
                        lesson.locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                      onClick={() => handleLessonClick(lesson)}
                      disabled={lesson.locked}
                    >
                      {lesson.completed && (
                        <CheckCircle className="h-5 w-5 text-green-500 absolute -top-1 -right-1" />
                      )}
                      {lesson.locked && (
                        <Lock className="h-4 w-4 text-muted-foreground absolute -top-1 -right-1" />
                      )}
                      {!lesson.completed && !lesson.locked && (
                        <Play className="h-5 w-5 mb-1" />
                      )}
                      <span className="text-xs text-center leading-tight">
                        {lesson.title}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Desafio Diário */}
      <Card className="lesson-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Desafio Diário</h3>
              <p className="text-muted-foreground">
                Complete uma lição hoje para manter sua sequência!
              </p>
            </div>
            <Button className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500">
              Começar Desafio
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Leaderboard user={user} />
    </div>
  )
}

export default HomePage

