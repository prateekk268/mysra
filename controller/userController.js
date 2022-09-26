const User = require('../model/user');


// --------------- create student ----------------------------------------------------------------------------

exports.createStudent = async function (req, res) {
    try {
        const studentData = {
            STUDENT_NAME: req.body.STUDENT_NAME,
            CONTACT_NUMBER: req.body.CONTACT_NUMBER,
            CLASS: req.body.CLASS,
            CREATE_DATE_TIME: Date.now()
        }

        const saveStudent = await User.create(studentData);
        return res.status(201).send({ status: true, message: "data Inserted Successfully", data: saveStudent })

    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}


// --------------- retrieve all students --------------------------------------------------------------------

exports.getAllStudent = async function (req, res) {
    try {

        let getUser = await User.findAll({
            order: [["STUDENT_ID", "ASC"]]
        });

        return res.status(200).send({ status: true, data: getUser })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}

// ---------------------------- retrieve student by id ----------------------

exports.getStudent = async function (req, res) {
    try {

        let getUser = await User.findAll({
            where: {
                STUDENT_ID: req.params.STUDENT_ID
            }
        });

        return res.status(200).send({ status: true, data: getUser })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}

// ----------------------- update student id ------------------

exports.updateStudent = async function (req, res) {
    try {

        let updateUser = await User.update({ STUDENT_ID: req.params.STUDENT_ID }, {
            where: {
                STUDENT_NAME: req.body.STUDENT_NAME,
                CONTACT_NUMBER: req.body.CONTACT_NUMBER,
                CLASS: req.body.CLASS,
            }
        });

        return res.status(200).send({ status: true, data: updateUser })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}

// ----------------------------- deleting student by id ---------------------------


exports.deleteStudentID = async function (req, res) {
    try {

        let delUser = await User.destory({
            where: {
                STUDENT_ID: req.params.STUDENT_ID
            }
        });

        return res.status(200).send({ status: true, data: delUser })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}


//  ------------------- empty student table -------------------

exports.deleteStudent = async function (req, res) {
    try {

        let delUser = await User.destory({
            where: {
                truncate: true
            }
        });

        return res.status(200).send({ status: true, data: delUser })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, err: err.message })
    }
}

//  ---------- filter student by query ----------------

// exports.getStudent = async function (req, res) {
//     try {

//         let getUser = await User.findAll({
//             where: {
//                 STUDENT_NAME: req.query.STUDENT_NAME
//             }
//         });

//         return res.status(200).send({ status: true, data: getUser })
//     } catch (err) {
//         console.log(err)
//         return res.status(500).send({ status: false, err: err.message })
//     }
// }