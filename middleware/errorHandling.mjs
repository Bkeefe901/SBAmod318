export function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({ msg: `🖐️ STOP! you have an Error: ${err.message}` });
}

