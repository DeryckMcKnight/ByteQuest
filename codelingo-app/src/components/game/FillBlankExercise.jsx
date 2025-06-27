import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const FillBlankExercise = ({ question, onAnswer }) => {
  const [userInput, setUserInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    const isCorrect = userInput.trim().toLowerCase() === question.options[question.correct].toLowerCase()
    setSubmitted(true)
    onAnswer(isCorrect)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && userInput.trim()) {
      handleSubmit()
    }
  }

  // Dividir o código em partes antes e depois da lacuna
  const codeParts = question.code.split('_____')

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">{question.question}</h3>
      
      <Card className="bg-gray-900 text-green-400">
        <CardContent className="p-4">
          <div className="font-mono text-sm flex items-center flex-wrap">
            <span>{codeParts[0]}</span>
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite aqui"
              className="mx-2 w-32 bg-gray-800 border-gray-600 text-green-400 placeholder:text-gray-500"
              disabled={submitted}
            />
            <span>{codeParts[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Dicas */}
      <div className="grid grid-cols-2 gap-2">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => !submitted && setUserInput(option)}
            disabled={submitted}
            className="text-xs"
          >
            {option}
          </Button>
        ))}
      </div>

      <Button 
        onClick={handleSubmit}
        disabled={!userInput.trim() || submitted}
        className="w-full"
      >
        Verificar
      </Button>
    </div>
  )
}

export default FillBlankExercise

