// required models and routing
const router = required("express").Router();
const Note = required("../../models/Note");

// create a note
router.post("/", async (req, res) => {
    const createNote = await Note.create(
        {
            id: req.body.id,
            body: req.body.body
        }
    );
    res.json(createNote);
});

