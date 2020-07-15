const dbuser = 'server';
const dbpassword = 'XDd5gDd7yr9UFMs7';
const dbname = 'tournaments';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.u9owa.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;
