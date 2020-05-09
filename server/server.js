const express = require('express')
const app = express()
const db = require('./config/db.config')
const port = 3000
const bodyParser = require('body-parser')


var cors = require('cors')
app.use(cors())

// add routes
const router = require('./routes/router.js');
app.use('/api', router);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ข้อความสำหรับ path หน้าแรกของ express เรา (localhost:3000/)
app.get('/', (req, res) => {
  res.status(200).send(`หน้าแรกของ api express`);
});

//StaffInfo
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
//Country

//MeasuermentRecord

//School
// app.get('/schools', db.getSchool)
// app.get('/schools/:id', db.getSchoolById)
// app.post('/schools', db.createSchool)
// app.put('/schools/:id', db.updateSchool)
// app.delete('/schools/:id', db.deleteSchool)

//StudentInfo
// app.get('/students', db.getStudent)
// app.get('/students/:id', db.getStudentById)
// app.post('/students', db.createStudent)
// app.put('/students/:id', db.updateStudent)
// app.delete('/students/:id', db.deleteStudent)

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