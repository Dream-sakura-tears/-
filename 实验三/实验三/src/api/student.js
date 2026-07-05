import request from "./request"

export function getStudentList(){

    return request({

        url:"/student",

        method:"get"

    })

}

export function addStudent(data){

    return request({

        url:"/student",

        method:"post",

        data

    })

}

export function updateStudent(data){

    return request({

        url:"/student",

        method:"put",

        data

    })

}

export function deleteStudent(id){

    return request({

        url:"/student/"+id,

        method:"delete"

    })

}