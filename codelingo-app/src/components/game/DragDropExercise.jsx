import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X } from 'lucide-react'

const DragDropExercise = ({ question, onAnswer }) => {
  const [droppedBlocks, setDroppedBlocks] = useState([])
  const [availableBlocks, setAvailableBlocks] = useState([...question.blocks])
  const [draggedItem, setDraggedItem] = useState(null)

  const handleDragStart = (e, block, index, source) => {
    setDraggedItem({ block, index, source })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, targetIndex) => {
    e.preventDefault()
    
    if (!draggedItem) return

    if (draggedItem.source === 'available') {
      const newAvailable = availableBlocks.filter((_, i) => i !== draggedItem.index)
      const newDropped = [...droppedBlocks]
      newDropped.splice(targetIndex, 0, draggedItem.block)
      
      setAvailableBlocks(newAvailable)
      setDroppedBlocks(newDropped)
    } else {
      const newDropped = [...droppedBlocks]
      const [removed] = newDropped.splice(draggedItem.index, 1)
      newDropped.splice(targetIndex, 0, removed)
      setDroppedBlocks(newDropped)
    }
    
    setDraggedItem(null)
  }

  const handleRemoveBlock = (index) => {
    const removedBlock = droppedBlocks[index]
    setDroppedBlocks(droppedBlocks.filter((_, i) => i !== index))
    setAvailableBlocks([...availableBlocks, removedBlock])
  }

  const handleSubmit = () => {
    const isCorrect = JSON.stringify(droppedBlocks) === JSON.stringify(question.blocks)
    onAnswer(isCorrect)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">{question.question}</h3>
      
      <Card className="min-h-32 border-2 border-dashed border-primary/30">
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground mb-2">Arraste os blocos aqui na ordem correta:</div>
          <div className="space-y-2">
            {droppedBlocks.map((block, index) => (
              <div
                key={`dropped-${index}`}
                className="relative"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, block, index, 'dropped')}
                  className="bg-primary text-primary-foreground p-3 rounded-lg font-mono text-sm cursor-move hover:bg-primary/90 transition-colors flex items-center justify-between"
                >
                  <span>{block}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveBlock(index)}
                    className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div
              className="h-12 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, droppedBlocks.length)}
            >
              {droppedBlocks.length === 0 ? 'Arraste os blocos aqui' : 'Solte aqui para adicionar'}
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <div className="text-sm text-muted-foreground mb-2">Blocos disponíveis:</div>
        <div className="flex flex-wrap gap-2">
          {availableBlocks.map((block, index) => (
            <div
              key={`available-${index}`}
              draggable
              onDragStart={(e) => handleDragStart(e, block, index, 'available')}
              className="bg-muted text-muted-foreground p-3 rounded-lg font-mono text-sm cursor-move hover:bg-muted/80 transition-colors"
            >
              {block}
            </div>
          ))}
        </div>
      </div>

      <Button 
        onClick={handleSubmit}
        disabled={droppedBlocks.length === 0}
        className="w-full"
      >
        Verificar Ordem
      </Button>
    </div>
  )
}

export default DragDropExercise

