import { ListItem, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Create } from '@mui/icons-material';

const TodoForm = ({ newTodo }) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newTodo(text)
        setText('')
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="create todo"
                                    edge="end"
                                    type="submit"
                                >
                                    <Create></Create>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem>
    )
}

export default TodoForm