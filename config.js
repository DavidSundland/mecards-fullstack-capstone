exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://admin:admin@ds231749.mlab.com:31749/mecards';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://admin:admin@ds231749.mlab.com:31749/mecards-tester';
exports.PORT = process.env.PORT || 8080;
