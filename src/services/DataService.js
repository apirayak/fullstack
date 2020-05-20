import http from "../http-common";

class DataService {
    //login
    login() {
        return http.post("/login");
    }

    //Users
    getUsers() {
        return http.get("/users");
    }
    getUserById(id) {
        return http.get(`/users/${id}`);
    }
    createUser(data) {
        return http.post("/user", data);
    }
    updateUser(id, data) {
        return http.put(`/users/${id}`, data);
    }
    deleteUser(id) {
        return http.delete(`/users/${id}`);
    }


    //Schools
    getSchool() {
        return http.get("/schools");
    }
    getSchoolById(id) {
        return http.get(`/schools/${id}`);
    }
    createSchool(data) {
        return http.post("/schools", data);
    }
    updateSchool(id, data) {
        return http.put(`/school/${id}`, data);
    }

    // Student
    getStudent() {
        return http.get("/students");
    }
    createStudent(data){
        return http.post("/students",data)
    }

    
}

export default new DataService();