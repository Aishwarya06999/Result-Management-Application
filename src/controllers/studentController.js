//importing student model
const Student = require('../models/student');

const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {

        const Studentroll = req.body.roll;   
        const DOB = req.body.dob;
        Student.findAll({ where: {roll : Studentroll, dob: DOB} }).then(individualStudent => res.render("student/view", { student : individualStudent}));
        const individualStudent = await Student.findAll({ where: {roll : Studentroll, dob: DOB} }); 
        if(Object.keys(individualStudent).length === 0){  
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        } 
        res.render("student/view", { student : individualStudent});    
    };

//exporting student controller functions
module.exports={
    student_login_get,
    student_login_post
}