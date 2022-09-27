const employeeData = {
    "name" : "john",
    "employeeId" : 33,
    "department" : "finance"
}

// priting json
console.log(employeeData)

const jsonData = JSON.stringify(employeeData)

// priting stringified json
console.log(jsonData)

const objData = JSON.parse(jsonData)

// priting json
console.log(objData)