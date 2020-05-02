const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/db.config')
const port = 3000

var cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// ข้อความสำหรับ path หน้าแรกของ express เรา (localhost:5000/)
app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// ข้อความสำหรับใส่ path ผิด (localhost:5000/asdfghjkl;)
app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});