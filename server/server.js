const express = require('express')
const app = express()
const db = require('./config/db.config')
const port = 3000
var cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(`หน้าแรกของ api express`);
});

//StaffInfo
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/user', db.createUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)

//Country

//MeasuermentRecord

//School
app.get('/schools', db.getSchools)
// app.get('/schools/:id', db.getSchoolById)
// app.post('/schools', db.createSchool)
// app.put('/schools/:id', db.updateSchool)
// app.delete('/schools/:id', db.deleteSchool)

//StudentInfo
app.get('/students', db.getStudents)
// app.get('/students/:id', db.getStudentById)
app.post('/students', db.createStudent)
// app.put('/students/:id', db.updateStudent)
// app.delete('/students/:id', db.deleteStudent)
app.post('/login' , db.login)
app.post('/register', db.register)
//UserLogin

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// ข้อความสำหรับใส่ path ผิด (localhost:5000/asdfghjkl;)
app.use((req, res, next) => {
  var err = new Error(`ไม่พบ path ที่คุณต้องการ`);
  err.status = 404;
  next(err);
});