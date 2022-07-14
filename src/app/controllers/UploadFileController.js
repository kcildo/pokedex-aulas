const fileUploadController = {
    storeFile: (req, res) => {
        const { filename } = req.file;

        res.json({ arquivo: filename });
    }
}

module.exports = fileUploadController