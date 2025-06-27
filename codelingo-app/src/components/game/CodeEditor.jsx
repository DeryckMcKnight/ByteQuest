import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, RotateCcw } from 'lucide-react'

const CodeEditor = ({ initialCode, expectedOutput, onComplete }) => {
  const [code, setCode] = useState(initialCode || '')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    
    try {
      // Simular execução de código JavaScript
      if (code.includes('console.log')) {
        // Capturar console.log
        const logs = []
        const originalLog = console.log
        console.log = (...args) => {
          logs.push(args.join(' '))
        }
        
        // Executar código
        eval(code)
        
        // Restaurar console.log
        console.log = originalLog
        
        setOutput(logs.join('\n'))
        
        // Verificar se a saída está correta
        if (expectedOutput && logs.join('\n') === expectedOutput) {
          onComplete(true)
        }
      } else {
        setOutput('Código executado com sucesso!')
      }
    } catch (error) {
      setOutput(`Erro: ${error.message}`)
    }
    
    setIsRunning(false)
  }

  const resetCode = () => {
    setCode(initialCode || '')
    setOutput('')
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Editor de Código</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Seu código:</label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-32 p-3 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-600 focus:border-primary focus:outline-none resize-none"
              placeholder="Digite seu código aqui..."
            />
          </div>
          
          <div className="flex space-x-2">
            <Button 
              onClick={runCode} 
              disabled={isRunning || !code.trim()}
              className="flex items-center space-x-2"
            >
              <Play className="h-4 w-4" />
              <span>{isRunning ? 'Executando...' : 'Executar'}</span>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={resetCode}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Resetar</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {output && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Saída:</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-3 rounded-lg text-sm font-mono whitespace-pre-wrap">
              {output}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CodeEditor

