module.exports = (req, res, next) => {

    const { title, status } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    if (
        status &&
        status !== "pending" &&
        status !== "completed"
    ) {
        return res.status(400).json({
            success: false,
            message: "Status must be pending or completed"
        });
    }

    next();

};