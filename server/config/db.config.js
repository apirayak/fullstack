/* eslint-disable no-unused-vars */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'childgrowth',
  password: '123',
  port: 5432,
})

//StaffInfo
//StaffInfo
//StaffInfo
//StaffInfo
const getUsers = (request, response) => {
    pool.query('SELECT * FROM staffinfo ORDER BY staffid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM staffinfo WHERE staffid = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    // INSERT INTO "StaffInfo" ("StaffId", "Username", "SchoolID", "Name","Email","Phone","Position") VALUES ('1111', 'testuser', '1', 'Test', 'test@mail.com', '0123456789', 'Teacher');
    // INSERT INTO "StaffInfo" ("StaffId", "Username", "SchoolID", "Name","Email","Phone","Position") VALUES ('2222', 'Testuser2', '2', 'Test2', 'test2@mail.com', '0000000000', 'Teacher');
    const { name, studentid, recordid, schoolid, grade, classr, gender,age } = request.body
    pool.query('INSERT INTO public.studentinfo (name, studentid, recordid, schoolid, grade, class, gender,age) VALUES ($1, $2,$3, $4, $5, $6, $7)', [name, studentid,recordid,schoolid, grade, classr, gender,age ], (error, results) => {
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

// //StudentInfo
// //StudentInfo
// //StudentInfo
// //StudentInfo

const getStudents = (request, response) => {
  pool.query('SELECT * FROM studentinfo ORDER BY studentid ASC', (error, results) => {
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
  const { name, studentid, schoolid, grade, classr, gender, age} = request.body

  pool.query('INSERT INTO studentinfo (name, studentid, schoolid, grade, class, gender,age) VALUES ($1, $2, $3, $4, $5, $6,$7)', [ name, studentid, schoolid ,grade, classr, gender, age], (error, results) => {
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
  pool.query('SELECT * FROM school ORDER BY schoolid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//login-register
const login = function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
      pool.query('SELECT * FROM userlogin WHERE username = ? AND password = ?', [username, password], (error, results, fields) =>{
        if (results.length) {
          response.send('ถูกละจ้า');
          // request.session.loggedin = true;
          // request.session.username = username;
          // response.redirect('/home');
        } else {
          response.send('Incorrect Username and/or Password!');
        }			
        response.end();
      });
    } else {
      response.send('Please enter Username and Password!');
      response.end();
    }
}

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

    getStudents,
    createStudent,

    getSchools,
    pool,
    login

    // getSchool,
    // getSchoolById,
    // createSchool,
    // updateSchool,
    // deleteSchool
  }