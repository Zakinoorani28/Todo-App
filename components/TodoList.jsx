import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TodoItem from './TodoItem';
import styles from '../Styles';

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Doctor Appointment', completed: true },
        { id: 2, text: 'Meeting at School', completed: false },
    ]);
    const [text, setText] = useState('');

    const addTask = () => {
        if (text.trim() === '') {
            return;
        }
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    return (
        <LinearGradient colors={['#00d4ff', '#8619c9']} style={styles.todoMain}>
            <View style={styles.todoMain}>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TodoItem
                            task={item}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                        />
                    )}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.TextInput}
                        value={text}
                        onChangeText={setText}
                        placeholder="New Task"
                    />
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={addTask}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}
