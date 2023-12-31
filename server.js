const express = require("express")
const app = express()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
]

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const note = notes.find(note => note.id == id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end("Not Found")
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    notes = notes.filter(note => note.id != id)
    res.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0 
    ? Math.max(...notes.map(a => a.id))
    : 0
    return maxId + 1
}

app.post('/api/notes', (req, res) => {
    if (!body.content) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
    }
    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }
    console.log(note)
    res.json(note)
})

const PORT = 4444

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))