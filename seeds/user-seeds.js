const { User } = require('../models');

const userData = [
  {
    username: "damon",
    email: "damon@gmail.com",
    password: "password1234"
  },
  {
    username: "bruiser brody",
    email: "bb@gmail.com",
    password: "password1234"
  },
  {
    username: "mick",
    email: "mick@gmail.com",
    password: "password1234"
  },
  {
    username: "rufus",
    email: "rufus@gmail.com",
    password: "password1234"
  },
  {
    username: "steph",
    email: "steph@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;