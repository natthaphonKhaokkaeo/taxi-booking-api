require('dotenv').config(); // ใช้ .env เก็บ API Key

const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers.authorization?.split(" ")[1]; 
    const validApiKey = process.env.API_KEY; 

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(403).json({ message: "Forbidden: Invalid API Key" });
    }
    next();
};

module.exports = verifyApiKey;
