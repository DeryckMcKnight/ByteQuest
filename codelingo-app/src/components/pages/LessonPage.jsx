import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle,
  X,
  ArrowRight,
  ArrowLeft,
  Heart,
  Star,
  Code,
  Play
} from 'lucide-react'
import DragDropExercise from '../game/DragDropExercise'
import FillBlankExercise from '../game/FillBlankExercise'
import { AnimatedFeedback, FloatingXP } from '../game/Animations'
import { lessonsDatabase } from '../../data/lessons'

const LessonPage = ({ user }) => {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [xpGained, setXpGained] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)
  const [animationType, setAnimationType] = useState('')
  const [animationMessage, setAnimationMessage] = useState('')
  const [showFloatingXP, setShowFloatingXP] = useState(false)

  const lesson = lessonsDatabase[lessonId]

  useEffect(() => {
    if (!lesson) {
      navigate("/") // Redireciona para a home se a lição não for encontrada
    }
  }, [lesson, navigate])

  if (!lesson) {
    return null // Ou um componente de carregamento/erro
  }

  const question = lesson.questions[currentQuestion]
  const progress = lesson.questions.length > 0 ? ((currentQuestion + 1) / lesson.questions.length) * 100 : 0

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
      const xpEarned = 10
      setXpGained(xpGained + xpEarned)
      setAnimationType('correct')
      setAnimationMessage('Correto!')
      setShowFloatingXP(true)
    } else {
      setHearts(hearts - 1)
      setAnimationType('incorrect')
      setAnimationMessage('Incorreto')
    }
    
    setShowFeedback(true)
    setShowAnimation(true)
  }

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === question.correct
    handleAnswerSubmit(isCorrect)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < lesson.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      // Lição completa
      handleLessonComplete()
    }
  }

  const handleLessonComplete = () => {
    // Simular salvamento do progresso
    const updatedUser = {
      ...user,
      xp: user.xp + xpGained,
      completedLessons: [...user.completedLessons, lessonId]
    }
    localStorage.setItem('bytequest_user', JSON.stringify(updatedUser))
    
    // Navegar de volta para home
    navigate('/')
  }

  const isCorrect = selectedAnswer === question.correct

  if (hearts <= 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card className="lesson-card">
          <CardContent className="p-8">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold mb-4">Ops! Você ficou sem vidas</h2>
            <p className="text-muted-foreground mb-6">
              Não se preocupe! Você pode tentar novamente em algumas horas ou assistir a um anúncio para continuar.
            </p>
            <div className="space-x-4">
              <Button onClick={() => navigate('/')}>
                Voltar ao Início
              </Button>
              <Button variant="outline">
                Assistir Anúncio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header da Lição */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`h-5 w-5 ${
                  i < hearts ? 'text-red-500 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">{xpGained} XP</span>
          </div>
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>{lesson.title}</span>
          <span>{currentQuestion + 1} de {lesson.questions.length}</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      {/* Conteúdo da Questão */}
      <Card className="lesson-card mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5" />
            <span>Questão {currentQuestion + 1}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Conteúdo da Questão baseado no tipo */}
          {question.type === 'drag-drop' ? (
            <DragDropExercise 
              question={question} 
              onAnswer={handleAnswerSubmit}
            />
          ) : question.type === 'fill-blank' ? (
            <FillBlankExercise 
              question={question} 
              onAnswer={handleAnswerSubmit}
            />
          ) : (
            <>
              <h3 className="text-lg font-medium">{question.question}</h3>
              
              {question.code && (
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <pre>{question.code}</pre>
                </div>
              )}

              {/* Opções de Resposta */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full text-left justify-start h-auto p-4 ${
                      showFeedback && index === question.correct
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : showFeedback && selectedAnswer === index && index !== question.correct
                        ? 'bg-red-100 border-red-500 text-red-700'
                        : ''
                    }`}
                    onClick={() => !showFeedback && handleAnswerSelect(index)}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                        {showFeedback && index === question.correct && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {showFeedback && selectedAnswer === index && index !== question.correct && (
                          <X className="h-4 w-4 text-red-600" />
                        )}
                        {!showFeedback && selectedAnswer === index && (
                          <div className="w-3 h-3 bg-primary rounded-full" />
                        )}
                      </div>
                      <span className="font-mono">{option}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`p-4 rounded-lg ${
                  isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-red-600" />
                    )}
                    <span className={`font-medium ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {isCorrect ? 'Correto!' : 'Incorreto'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{question.explanation}</p>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Sair da Lição
                </Button>
                
                {!showFeedback && question.type === 'multiple-choice' ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                  >
                    Verificar
                  </Button>
                ) : showFeedback ? (
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion < lesson.questions.length - 1 ? (
                      <>
                        Próxima
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      'Finalizar Lição'
                    )}
                  </Button>
                ) : null}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Animações */}
      {showAnimation && (
        <AnimatedFeedback
          type={animationType}
          message={animationMessage}
          xpGained={animationType === 'correct' ? 10 : 0}
          onComplete={() => setShowAnimation(false)}
        />
      )}

      {showFloatingXP && (
        <FloatingXP
          xp={10}
          onComplete={() => setShowFloatingXP(false)}
        />
      )}
    </div>
  )
}

export default LessonPage

