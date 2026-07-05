import { students } from "../mock/db"

export function getList(){

    return Promise.resolve({

        code:200,

        data:students

    })

}

export function add(student){

    student.id=Date.now()

    students.push(student)

    return Promise.resolve({

        code:200

    })

}

export function remove(id){

    const index=students.findIndex(item=>item.id==id)

    students.splice(index,1)

    return Promise.resolve({

        code:200

    })

}