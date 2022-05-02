// required models and routing
const router = required("express").Router();
const Note = required("../../models/Note");

// create a note (save)
router.post("/", async (req, res) => {
    const createNote = await Note.create(
        {
            note_id: req.body.note_id,
            note_title: req.body.note_title,
            note_body: req.body.note_body
        }
    );
    res.json(createNote);
});

// update note
router.put("/:note_id", async (req, res) => {
    const updateNote = await Note.update(
        {
            note_title: req.body.note_title,
            note_body: req.body.note_body
        },
        {
            where: {
                note_id: req.params.note_id,
            },
        }
    );
})

// delete a note
router.delete("/:note_id", async (req, res) => {
    const deleteNote = await Note.destroy({
        where: { note_id: req.params.note_id,
        },
    });
    res.json(deleteNote);
});

module.exports = router;