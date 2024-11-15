import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from '../Styles';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.todoItem}>
            <Checkbox
                value={task.completed}
                onValueChange={() => toggleCompleted(task.id)}
                color={task.completed ? '#1e90ff' : undefined}
            />
            <Text style={[styles.todoItemText, task.completed && styles.completed]}>
                {task.text}
            </Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(task.id)}
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
