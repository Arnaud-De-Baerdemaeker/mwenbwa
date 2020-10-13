import jwt from "jsonwebtoken";
const JWT_SIGN_SECRET = "qgofgidfosdHUUNIOG8376523hsdf58340";

function generateToken(userData) {
    const token = jwt.sign(
        {
            userId: userData._id,
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: "4h",
        },
    );
    return token;
}

function getAccountId(token) {
    let accountId = -1;
    try {
        const jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) {
            accountId = jwtToken.userId;
        }
    } catch (error) {
        return null;
    }
    return accountId;
}

function parseAuthorization(token) {
    return token != null ? token.replace("Bearer ", "") : null;
}

module.exports = {
    generateToken,
    getAccountId,
    parseAuthorization,
};
