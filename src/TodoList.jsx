const initialData = [
    { id: 1, title: 'Buy Milk', completed: false },
    { id: 2, title: 'Meeting with Ali', completed: false },
    { id: 3, title: 'Go to Gym', completed: false },
    { id: 4, title: 'Learn React', completed: true }
]


import * as React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

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

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodoList