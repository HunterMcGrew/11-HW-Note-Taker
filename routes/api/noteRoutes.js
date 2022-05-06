// required models and routing
const router = require("express").Router();
const Note = require("../../models/Note");

// Get all notes
router.get("/", async (req, res) => {
    const notes = await Note.findAll();
    return res.json(notes);
});

// get note by ID
router.get("/:id", async (req, res) => {
    const note = await Note.findByPk(req.params.id);
    return res.json(note);
})

// create a note (save)
router.post("/", async (req, res) => {
    const createNote = await Note.create(
        {
            // id: req.body.id,
            title: req.body.title,
            text: req.body.text
        }
    );
    res.json(createNote);
});

// update note
router.delete("/:id", async (req, res) => {
    const updateNote = await Note.update(
        {
            title: req.body.title,
            text: req.body.text
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
        return res.json(updateNote)
});

// delete a note
router.delete("/:id", async (req, res) => {
    const deleteNote = await Note.destroy({
        where: { id: req.params.id,
        },
    });
    res.json(deleteNote);
});

module.exports = router;