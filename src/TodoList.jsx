import { v4 as uuidv4 } from 'uuid';

const initialData = [
    { id: uuidv4(), title: 'Buy Milk', completed: false },
    { id: uuidv4(), title: 'Meeting with Ali', completed: false },
    { id: uuidv4(), title: 'Go to Gym', completed: false },
    { id: uuidv4(), title: 'Learn React', completed: true }
]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return []
    return data

}

import * as React from 'react'
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';


function TodoList() {
    const [todos, setTodos] = React.useState(getInitialData());

    React.useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
        )
    }, [todos])

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }

    const newTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), title: text, completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            m: 5
        }}>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>Todos</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            removeTodo={() => removeTodo(todo.id)}
                            toggleTodo={() => toggleTodo(todo.id)}
                        />
                    )
                })}
                <TodoForm newTodo={newTodo} />
            </List>
        </Box>
    );
}

export default TodoList
