/* eslint-disable no-unused-vars */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yongapi',
  host: 'localhost',
  database: 'ChildGrowth',
  password: '123',
  port: 3333,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM "StaffInfo" ORDER BY "StaffId" ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM "StaffInfo" WHERE "StaffId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { id, username, schoolid, name, email, phone, position } = request.body
  
    pool.query('INSERT INTO "StaffInfo" ("StaffId", "Username", "SchoolID", "Name","Email","Phone","Position") VALUES ($1, $2, $3, $4, $5, $6, $7)', [id, username, schoolid, name, email, phone, position], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.name}`)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }