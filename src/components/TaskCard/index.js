import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { theme } from '../../styles/global'

export default function TaskCard({ item, onDelete, onEdit }) {
  const priorityColor = theme.colors.priority[item.priority] || theme.colors.textSub

  return (
    <View style={[styles.card, { borderLeftColor: priorityColor }]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={[styles.badge, { color: priorityColor }]}>
          • {item.priority} {item.badge}
        </Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {item.start} - {item.end}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <Text style={styles.icon}>✏️ Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item)}>
          <Text style={styles.icon}>❌ Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}