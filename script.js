console.log('veikia')

// masyvo kurimas

let students = ['Steve', 'John', 'Peter']

//masyvo nariu pasiekimas
console.log(students[0])
console.log(students[1])
console.log(students[2])

//Kaip iteruojama per masyva (ciklai/loops)

//for ciklas

for (let i=0; i < students.length; i++) {
console.log('for ciklas ' + students[i])
}

//map ciklas 
students.map((student) => {
    console.log('map ciklas ' + student)
})

//forEach ciklas
students.forEach((student) => {
    console.log('map ciklas ' + student)
})

//while ciklas
let n = 0
while (n < students.length) {
    console.log('While ciklas: ' + students[n])
    n++
}

// do ... while ciklas 
let m = 0
do {
    console.log('do ... while ciklas: ' + students[m])
    m++
} while (m < students.length)

//do while visada paleis viena cikla (net kai ciklas yra tuscias, be nariu)

// for ...of ciklas
for (let student of students) {
    console.log('for ...of ciklas: ' + student)
}


let student1 = ['John', 'Doe', 25, 'Vilnius', 'FEU9', 'Steve']

console.log(student1)
console.log(student1[0])
console.log(student1[1])
console.log(student1[2])
console.log(student1[3])
console.log(student1[4])

/*

Studentas 1: 
    - Vardas: John,               (objekto properties)
    - Pavarde: Doe,                (objekto properties)
    - Amzius: 25,
    - Miestas: Vilnius,
    - Grupe: FEU9,
    - Antras vardas: Steve

visa tai galima surasyti i objekta. 

Objekto sintakse: 

let obj = {
    key: 'value',
}

*/

let studentObj = {
    name: 'John', //Property (key: value)
    surname: 'Doe',
    age: 25,
    city: 'Vilnius',
    group: 'FEU9',
    secondName: 'Steve',
    grades: [7, 8, 9],
    address: {
        city: 'Kaunas',
        street: 'Vilniaus st.'
    },
    getFullName: function() {
        console.log(this)
        return `Full name is ${this.name} ${this.secondName} ${this.surname}`
    } 
    //objektuose sukurtos funkcijos vadinamos METODAIS. this naudojama funkcijai objekto ribose kuriant metoda. this yra objektas, kuriam sukurta funkcija.
}

console.log(studentObj)

//Objekto properties pasiekimas

console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])

let propertyName = 'age'
console.log(studentObj['propertyName']) //galima taip issikviest arba taip, kaip apacioj. Sutrumpintai

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.city)
console.log(studentObj.age)
console.log(studentObj.group)

//Objekto properties pakeitimas
console.log(studentObj.age)
// studentObj.age = 26
studentObj.age = studentObj.age + 1
console.log(studentObj.age)

studentObj['city'] = 'Kaunas'
console.log(studentObj.city)


//objekto properties sukurimas uz objekto ribu
console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)

console.log(studentObj['birth city'])
studentObj['birth city'] = 'Klaipeda'
console.log(studentObj['birth city'])

//Objekto properties istrynimas
delete studentObj['birth city']
delete studentObj.group

console.log(studentObj)

studentObj.hobbies = ['sports', 'reading']
console.log(student.hobbies)
console.log(student.hobbies[0])
console.log(student.hobbies[1])

studentObj.hobbies.forEach(hobby => {
    console.log(hobby)
})

studentObj.contacts = {
    phone: 8657895645,
    email: 'vardas@pavarde.lt',
}

console.log(studentObj.contacts)
console.log(studentObj.contacts.phone)
console.log(studentObj.contacts.email)

studentObj.getFullName()

