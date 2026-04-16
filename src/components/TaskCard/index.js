import { View, Text, TouchableOpacity } from 'react-native'
import { theme } from '../../styles/global'
import styles from './style'

export default function TaskCard({ item, onDelete, onEdit }) {
  // normaliza prioridade para bater com o theme
  const normalizePriority = (p) => {
    if (!p) return ''
    const lower = p.toLowerCase()
    if (lower === 'alta') return 'Alta'
    if (lower === 'media' || lower === 'média') return 'Média'
    if (lower === 'baixa') return 'Baixa'
    return p
  }

  const priorityKey = normalizePriority(item.priority)
  const priorityColor = theme.colors.priority[priorityKey] || theme.colors.textSub

  return (
    <View style={[styles.card, { borderLeftColor: priorityColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Text style={[styles.badge, { color: priorityColor }]}>
        • {priorityKey}
      </Text>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {item.start} - {item.end}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <Text style={styles.icon}>✏️ Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Text style={styles.icon}>❌ Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}