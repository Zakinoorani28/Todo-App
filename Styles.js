import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    todoMain: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },

    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },

    todoItemText: {
        flex: 1,
        marginRight: 12,
        paddingLeft: 10,
        color: '#333',
        fontSize: 18,
    },

    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },

    deleteButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },

    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    addButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 12,
        paddingHorizontal: 25,
        marginHorizontal: -10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },

    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },

    TextInput: {
        flex: 1,
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 15,
        marginHorizontal: -10,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
});

export default styles;
