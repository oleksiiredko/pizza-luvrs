const Sequelize = require('sequelize')

const database = 'pizza_luvrs'
const host = 'pizza-db.cmymklkhhib1.us-east-2.rds.amazonaws.com'
const username = 'postgres'
const password = 'PASSWORD'

const pgClient = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    dialect: 'postgres'
  }
)

const Pizza = pgClient.define('pizza', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  toppings: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.BIGINT
  }
})

Pizza.initialize = async () => {
  return Pizza.sync({ force: true }).then(() => {
    console.log('postgres connection ready')
  }).catch(err => console.error(err))
}

module.exports = Pizza
