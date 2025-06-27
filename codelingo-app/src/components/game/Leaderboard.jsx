import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Trophy, Medal, Award, Crown } from 'lucide-react'

const Leaderboard = ({ user }) => {
  const [leaderboardData, setLeaderboardData] = useState([])

  useEffect(() => {
    // Simular dados do leaderboard
    const mockData = [
      { id: 1, name: 'Ana Silva', xp: 2450, level: 8, streak: 15, avatar: 'A' },
      { id: 2, name: 'Carlos Santos', xp: 2200, level: 7, streak: 12, avatar: 'C' },
      { id: 3, name: 'Maria Oliveira', xp: 1980, level: 6, streak: 8, avatar: 'M' },
      { id: 4, name: 'João Pedro', xp: 1750, level: 6, streak: 5, avatar: 'J' },
      { id: 5, name: 'Lucia Costa', xp: 1650, level: 5, streak: 10, avatar: 'L' },
      { id: 6, name: user.name, xp: user.xp, level: user.level, streak: user.streak, avatar: user.name.charAt(0).toUpperCase() },
      { id: 7, name: 'Pedro Lima', xp: 1200, level: 4, streak: 3, avatar: 'P' },
      { id: 8, name: 'Sofia Rocha', xp: 1100, level: 4, streak: 7, avatar: 'S' },
    ]

    // Ordenar por XP e adicionar posições
    const sortedData = mockData
      .sort((a, b) => b.xp - a.xp)
      .map((player, index) => ({ ...player, position: index + 1 }))

    setLeaderboardData(sortedData)
  }, [user])

  const getRankIcon = (position) => {
    switch (position) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Trophy className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-600" />
      default:
        return <Award className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getRankColor = (position) => {
    switch (position) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500'
      case 3:
        return 'bg-gradient-to-r from-amber-400 to-amber-600'
      default:
        return 'bg-muted'
    }
  }

  return (
    <Card className="lesson-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-accent" />
          <span>Ranking Semanal</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {leaderboardData.map((player) => (
          <div
            key={player.id}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
              player.name === user.name
                ? 'bg-primary/10 border-2 border-primary/30 scale-105'
                : 'bg-muted/50 hover:bg-muted'
            }`}
          >
            {/* Posição */}
            <div className="flex items-center justify-center w-8 h-8">
              {player.position <= 3 ? (
                getRankIcon(player.position)
              ) : (
                <span className="text-sm font-bold text-muted-foreground">
                  {player.position}
                </span>
              )}
            </div>

            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getRankColor(player.position)}`}>
              {player.avatar}
            </div>

            {/* Informações do jogador */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className={`font-medium ${player.name === user.name ? 'text-primary' : ''}`}>
                  {player.name}
                </span>
                {player.name === user.name && (
                  <Badge variant="secondary" className="text-xs">Você</Badge>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Nível {player.level} • {player.streak} dias seguidos
              </div>
            </div>

            {/* XP */}
            <div className="text-right">
              <div className="font-bold text-accent">{player.xp.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">XP</div>
            </div>
          </div>
        ))}

        {/* Informação adicional */}
        <div className="text-center text-sm text-muted-foreground mt-4 p-3 bg-muted/30 rounded-lg">
          <Trophy className="h-4 w-4 inline mr-1" />
          O ranking é atualizado semanalmente. Continue estudando para subir de posição!
        </div>
      </CardContent>
    </Card>
  )
}

export default Leaderboard

