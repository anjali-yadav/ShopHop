const bcrypt = require('bcryptjs')
const Users = [
    {
        name: "admin",
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "anjali",
        email: 'anjali@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "arti",
        email: 'arti@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
];
module.exports = Users;