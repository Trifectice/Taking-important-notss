const fs = require('fs');

module.exports = (app) => {
    // Route to get all notes
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    // Route to save a new note
    const fs = require('fs');
    const { v4: uuidv4 } = require('uuid');
    
    module.exports = (app) => {
        // ... other routes ...
    
        app.post('/api/notes', (req, res) => {
            const newNote = req.body;
            
            // Assign a unique ID to the new note
            newNote.id = uuidv4();
    
            // Read the current notes from the db.json file
            fs.readFile('./db/db.json', 'utf8', (err, data) => {
                if (err) throw err;
                const notes = JSON.parse(data);
                
                // Add the new note to the array of notes
                notes.push(newNote);
    
                // Write the updated notes back to the db.json file
                fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
                    if (err) throw err;
                    res.json(newNote);
                });
            });
        });
    
        // ... other routes ...
    };
}    