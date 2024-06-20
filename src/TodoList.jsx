const initialData = [
    { id: 1, title: 'Buy Milk', completed: false },
    { id: 2, title: 'Meeting with Ali', completed: false },
    { id: 3, title: 'Go to Gym', completed: false },
    { id: 4, title: 'Learn React', completed: true }
]


import * as React from 'react'
import List from '@mui/material/List';
import TodoItem from './TodoItem';


function TodoList() {
    const [todos, setTodos] = React.useState(initialData);

    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        removeTodo={() => removeTodo(todo.id)}
                    />
                )
            })}
        </List>
    );
}

export default TodoList
