import React, { useState } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function AddTask({ visible, onSave, onClose }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: '',
        start: '',
        end: ''
    })

    const handleSave = () => {
        onSave(task)
        setTask({
            title: '',
            description: '',
            priority: '',
            start: '',
            end: ''
        })
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.modal}>
                <Text style={styles.titulo}>Nova Tarefa</Text>

                <TextInput
                    placeholder='Título'
                    style={styles.input}
                    value={task.title}
                    onChangeText={t => setTask({ ...task, title: t })}
                />

                <TextInput
                    placeholder='Descrição'
                    style={styles.input}
                    value={task.description}
                    onChangeText={d => setTask({ ...task, description: d })}
                />

                <TextInput
                    placeholder='Prioridade (alta / média / baixa)'
                    style={styles.input}
                    value={task.priority}
                    onChangeText={p => setTask({ ...task, priority: p })}
                />

                <TextInput
                    placeholder='Data de início (DD/MM)'
                    style={styles.input}
                    value={task.start}
                    onChangeText={s => setTask({ ...task, start: s })}
                />

                <TextInput
                    placeholder='Data de término (DD/MM)'
                    style={styles.input}
                    value={task.end}
                    onChangeText={e => setTask({ ...task, end: e })}
                />

                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.txtSalvar}>Salvar tarefa</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.txtCancelar}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
