const error = {
    e401: (req, res, err) => {
        res.status(401).render('error', { 
            title: "Error 401 Authorization Required", 
            message: err.message || "Authorization Required", 
        });
    },
    e403: (req, res, err) => {
        res.status(403).render('error', { 
            title: "Error 403 Forbidden",
            message: err.message || "Forbidden",
        });
    },
    e404: (req, res) => {
        res.status(404).render('error', { 
            title: "Error 404 Not Found",
            message: "Resource Not Found" 
        });
    },
    e500: (req, res) => {
        res.status(500).render('error', { 
            title: "Error 500 Internal Server Error",
            message: "Internal Server Error" 
        });
    },
};

export default error;
