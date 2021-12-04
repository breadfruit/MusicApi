const config = {
    port: 3300,
    database: {
        dbName: 'music',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456'
    },
    jwt: {
        secretKey: 'music_jwt',
        whiteList: [
            /^\//,
            /^\/api\/user\/login/,
            /^\/api\/user\/verify/,
          ],
        expiresIn: "4h",
    }
}

module.exports = config;