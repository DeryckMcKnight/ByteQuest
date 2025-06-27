// Banco de dados de lições expandido
export const lessonsDatabase = {
  // Python Básico
  'python-basics-1': {
    title: 'Variáveis e Tipos em Python',
    description: 'Aprenda sobre variáveis e tipos de dados básicos',
    xpReward: 50,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Qual é a forma correta de criar uma variável em Python?',
        code: null,
        options: [
          'var nome = "João"',
          'nome = "João"',
          'string nome = "João"',
          'let nome = "João"'
        ],
        correct: 1,
        explanation: 'Em Python, você simplesmente atribui um valor a um nome de variável usando o operador =.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete o código para criar uma variável idade com valor 25:',
        code: '_____ = 25',
        options: ['idade', 'var idade', 'int idade', 'let idade'],
        correct: 0,
        explanation: 'Em Python, você não precisa declarar o tipo da variável explicitamente.'
      },
      {
        id: 3,
        type: 'code-error',
        question: 'Identifique o erro no código abaixo:',
        code: '2nome = "Python"\nprint(2nome)',
        options: [
          'Falta ponto e vírgula',
          'Nome de variável não pode começar com número',
          'Deveria usar var',
          'Está correto'
        ],
        correct: 1,
        explanation: 'Nomes de variáveis em Python não podem começar com números. Devem começar com letra ou underscore.'
      },
      {
        id: 4,
        type: 'drag-drop',
        question: 'Arranje os blocos na ordem correta para criar e imprimir uma variável:',
        code: null,
        blocks: ['nome = "ByteQuest"', 'print(nome)'],
        correct: [0, 1],
        explanation: 'Primeiro criamos a variável, depois a imprimimos.'
      }
      ]
    },

    'python-basics-2': {
    title: 'Operadores em Python',
    description: 'Aprenda sobre operadores aritméticos e de comparação',
    xpReward: 50,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Qual é o resultado de 10 // 3 em Python?',
        code: 'resultado = 10 // 3\nprint(resultado)',
        options: ['3.33', '3', '4', '3.0'],
        correct: 1,
        explanation: 'O operador // é a divisão inteira, que retorna apenas a parte inteira do resultado.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete o código para verificar se um número é maior que 10:',
        code: 'if numero _____ 10:\n    print("Maior que 10")',
        options: ['>', '<', '==', '!='],
        correct: 0,
        explanation: 'O operador > verifica se o valor à esquerda é maior que o valor à direita.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual operador é usado para exponenciação em Python?',
        code: null,
        options: ['^', '**', 'pow', 'exp'],
        correct: 1,
        explanation: 'Em Python, ** é o operador de exponenciação. Por exemplo: 2**3 = 8.'
      }
    ]
  },

  'python-basics-3': {
    title: 'Condicionais em Python',
    description: 'Aprenda sobre if, elif e else',
    xpReward: 60,
    questions: [
      {
        id: 1,
        type: 'drag-drop',
        question: 'Organize o código para verificar se um número é positivo, negativo ou zero:',
        code: null,
        blocks: [
          'if numero > 0:',
          '    print("Positivo")',
          'elif numero < 0:',
          '    print("Negativo")',
          'else:',
          '    print("Zero")'
        ],
        correct: [0, 1, 2, 3, 4, 5],
        explanation: 'A estrutura if-elif-else permite verificar múltiplas condições em sequência.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete o código para verificar se uma pessoa pode votar:',
        code: 'if idade _____ 16:\n    print("Pode votar")',
        options: ['>=', '>', '<=', '<'],
        correct: 0,
        explanation: 'No Brasil, a idade mínima para votar é 16 anos, então usamos >= 16.'
      }
    ]
  },

  // JavaScript Essencial
  'js-basics-1': {
    title: 'Introdução ao JavaScript',
    description: 'Primeiros passos com JavaScript',
    xpReward: 50,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'Qual é a forma correta de declarar uma variável em JavaScript moderno?',
        code: null,
        options: [
          'var nome = "João"',
          'let nome = "João"',
          'variable nome = "João"',
          'string nome = "João"'
        ],
        correct: 1,
        explanation: 'let é a forma moderna de declarar variáveis em JavaScript, introduzida no ES6.'
      },
      {
        id: 2,
        type: 'fill-blank',
        question: 'Complete o código para exibir uma mensagem no console:',
        code: '_____("Olá, mundo!");',
        options: ['console.log', 'print', 'echo', 'alert'],
        correct: 0,
        explanation: 'console.log() é usado para exibir mensagens no console do navegador.'
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Qual é a diferença entre == e === em JavaScript?',
        code: 'console.log(5 == "5");\nconsole.log(5 === "5");',
        options: [
          'Não há diferença',
          '== compara valor, === compara valor e tipo',
          '=== é mais rápido',
          '== é mais moderno'
        ],
        correct: 1,
        explanation: '== faz conversão de tipo antes da comparação, === compara valor e tipo sem conversão.'
      }
    ]
  },

  // HTML & CSS
  'html-basics-1': {
    title: 'Estrutura HTML',
    description: 'Aprenda a estrutura básica de uma página HTML',
    xpReward: 50,
    questions: [
      {
        id: 1,
        type: 'drag-drop',
        question: 'Organize as tags HTML na ordem correta para uma página básica:',
        code: null,
        blocks: [
          '<!DOCTYPE html>',
          '<html>',
          '<head>',
          '<title>Minha Página</title>',
          '</head>',
          '<body>',
          '<h1>Olá, mundo!</h1>',
          '</body>',
          '</html>'
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        explanation: 'Esta é a estrutura básica de um documento HTML válido.'
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'Qual tag é usada para criar um parágrafo em HTML?',
        code: null,
        options: ['<paragraph>', '<p>', '<para>', '<text>'],
        correct: 1,
        explanation: 'A tag <p> é usada para definir parágrafos em HTML.'
      }
    ]
  }
}

export default lessonsDatabase

