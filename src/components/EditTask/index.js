import React, { useState, useEffect } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default function EditTask({ visible, taskData, onSave, onClose }) {
    const [currentTask, setCurrentTask] = useState(taskData || {
        title: '',
        description: '',
        priority: '',
        start: '',
        end: ''
    })

    useEffect(() => {
        setCurrentTask(taskData || {
            title: '',
            description: '',
            priority: '',
            start: '',
            end: ''
        })
    }, [taskData])

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.modal}>
                <Text style={styles.titulo}>
                    Editar tarefa
                </Text>
                <TextInput
                    placeholder='Título'
                    value={currentTask?.title}
                    style={styles.input}
                    onChangeText={t => setCurrentTask({ ...currentTask, title: t })}
                />
                <TextInput
                    placeholder='Descrição'
                    value={currentTask?.description}
                    style={styles.input}
                    onChangeText={d => setCurrentTask({ ...currentTask, description: d })}
                />

                <TextInput
                    placeholder='Prioridade (alta / média / baixa)'
                    value={currentTask?.priority}
                    style={styles.input}
                    onChangeText={p => setCurrentTask({ ...currentTask, priority: p })}
                />

                <TextInput
                    placeholder='Data de início (DD/MM)'
                    value={currentTask?.start}
                    style={styles.input}
                    onChangeText={s => setCurrentTask({ ...currentTask, start: s })}
                />

                <TextInput
                    placeholder='Data de término (DD/MM)'
                    value={currentTask?.end}
                    style={styles.input}
                    onChangeText={e => setCurrentTask({ ...currentTask, end: e })}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onSave(currentTask)}>
                <Text style={styles.atualizar}>
                    Atualizar
                </Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonBack}
                onPress={onClose}>
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>
        </Modal>
    )
}