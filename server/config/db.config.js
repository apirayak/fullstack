/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */

const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('./db.js');
const userMiddleware = require('../middleware/users.js');

//StaffInfo
//StaffInfo
//StaffInfo
//StaffInfo
const getUsers = (request, response) => {
  db.query('SELECT * FROM staffinfo ORDER BY staffid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('SELECT * FROM staffinfo WHERE staffid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  // INSERT INTO "StaffInfo" ("StaffId", "Username", "SchoolID", "Name","Email","Phone","Position") VALUES ('1111', 'testuser', '1', 'Test', 'test@mail.com', '0123456789', 'Teacher');
  // INSERT INTO "StaffInfo" ("StaffId", "Username", "SchoolID", "Name","Email","Phone","Position") VALUES ('2222', 'Testuser2', '2', 'Test2', 'test2@mail.com', '0000000000', 'Teacher');
  const { name, studentid, recordid, schoolid, grade, classr, gender, age } = request.body
  
  db.query('INSERT INTO public.studentinfo (name, studentid, recordid, schoolid, grade, class, gender,age) VALUES ($1, $2,$3, $4, $5, $6, $7)', [name, studentid, recordid, schoolid, grade, classr, gender, age], (error, results) => {
    console.log(request.body)
    if (error) {

      throw error
    }
    response.status(201).send(`User added with ID: ${results.name}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  db.query(
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

  db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

// //StudentInfo
// //StudentInfo
// //StudentInfo
// //StudentInfo

const getStudents = (request, response) => {
  db.query('SELECT * FROM studentinfo ORDER BY studentid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const getSchoolById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM "School" WHERE "SchoolID" = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

const createStudent = (request, response) => {
  const { name, studentid, schoolid, grade, classr, gender, age } = request.body

  db.query('INSERT INTO studentinfo (name, studentid, schoolid, grade, class, gender,age) VALUES ($1, $2, $3, $4, $5, $6,$7)', [name, studentid, schoolid, grade, classr, gender, age], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.name}`)
  })
}

// const updateSchool = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE School SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteSchool = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM School WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

//school
const getSchools = (request, response) => {
  db.query('SELECT * FROM school ORDER BY schoolid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//register
const register = (userMiddleware.validateRegister,(req,res,next) => {
  const { username, password} = req.body
  db.query(
    'SELECT * FROM userlogin WHERE LOWER(username) = LOWER($1)',[username],(err, result) => {
      if (result) {
        if (result)
          console.log("Test:" + result); 
          console.log("Test2:" + username); 
          console.log(JSON.stringify(result))
      }
      if (!result.length) {
        return res.status(409).send({
          msg: 'This username is already in use!'
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              'INSERT INTO userlogin (username, password,role) VALUES ($1,$2,$3)',[username,hash,'user'] , (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
          }
        });
      }
    }
  );
});

//login
const login = (req, res, next) => {
  const {username,password} = req.body
  db.query(
    'SELECT * FROM userlogin WHERE username = $1', [username],(err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'Username or password is incorrect! ---1' + console.log(result.length)
        });
      }
      // check password
      bcrypt.compare(
        password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            // eslint-disable-next-line no-unreachable
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
          if (bResult) {
            const token = jwt.sign({
              username: result[0].username,
            },
              'SECRETKEY', {
              expiresIn: '7d'
            }
            );
            db.query(
              'UPDATE userlogin SET lastlogin = now() WHERE username = $1',[result[0].username]);
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!---2'
          });
        }
      );
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,

  getStudents,
  createStudent,

  getSchools,
  login,
  register

  // getSchool,
  // getSchoolById,
  // createSchool,
  // updateSchool,
  // deleteSchool
}