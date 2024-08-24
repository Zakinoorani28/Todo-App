import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
    },

    todoItemText: {
        flex: 1,
        marginRight: 8,
        color: '#333',
        fontSize: 16,
    },

    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },

    deleteButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },

    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default styles;
