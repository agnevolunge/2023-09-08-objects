console.groupCollapsed('Arrays')

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

// do... while ciklas 
let m = 0
do {
    console.log('do... while ciklas: ' + students[m])
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

console.groupEnd()

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
    name: 'John', //Property (key(name): value('John')
    surname: 'Doe',
    age: 25,
    city: 'Vilnius',
    group: 'FEU9',
    'second name': 'Steve',
    grades: [7, 8, 9],
    address: { //objekte gali buti ir objektas, kaip siuo atveju adresas
        city: 'Kaunas',
        street: 'Vilniaus st.'
    },
//galima obejekte sukurti funkcija

    getFullName: function() { //anonimine funkcija, nes tusti skliausteliai
        console.log(this) //this tai yra sitas objektas, su kuriuo mes dabar dirbame, kuriame sukurta funkcija
        return `Full name is: ${this.name} ${this['second name']} ${this.surname}`
    } ,
    setStudentInactive: function() {
        this.isActive = false
    },
    setStudentActive() { //galima funkcija naudoti ir su zodeliu function ir taip kaip cia
        this.isActive = true
    },
    removeHobby: function (hobbyToRemove) {
        console.log(this.hobbies)
        let filteredHobbies = this.hobbies.filter(hobby => {
            // console.log(hobby)
            // console.log(hobbyToRemove)
            // console.log(hobby === hobbyToRemove)
            return hobby !== hobbyToRemove
        })
        this.hobbies = filteredHobbies

        console.log(filteredHobbies)
    }
}
  //objektuose sukurtos funkcijos vadinamos METODAIS. this naudojama funkcijai objekto ribose kuriant metoda. this yra objektas, kuriam sukurta funkcija.


console.log(studentObj)

//Objekto properties pasiekimas

console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['second name'])

let propertyName = 'age'
console.log(studentObj[propertyName])

//galima taip issikviest arba taip, kaip apacioj. Sutrumpintai. dot notation

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.city)
console.log(studentObj.age)
console.log(studentObj.group) //bet jau property is dvieju zodziu su dot notation nepasieksim, kaip second name siuo atveju. is dvieju zodziu pasieksim tokiu budu kaip virsuje. su dot notation nepasieksim ir kintamojo, kaip virsuj susikurem propertyName.

//Objekto properties pakeitimas
console.log(studentObj.age)
// studentObj.age = 26
studentObj.age = studentObj.age + 1
console.log(studentObj.age) // dabar jau pasikeites amzius, nebe 25, o 26

studentObj['city'] = 'Kaunas' // galima pakeisti ir ne per taska, o per lauztinius skliaustus
console.log(studentObj.city)


//objekto properties sukurimas uz objekto ribu
console.log(studentObj.isActive) 
studentObj.isActive = true
console.log(studentObj.isActive) //pries tai buvo undefinied, nes nebuvo sukurta

console.log(studentObj['birth city'])
studentObj['birth city'] = 'Klaipeda'
console.log(studentObj['birth city'])

//Objekto properties istrynimas
delete studentObj['birth city']
delete studentObj.group


studentObj.hobbies = ['sports', 'reading'] //sukuriam nauja masyva
console.log(studentObj.hobbies)
console.log(studentObj.hobbies[0])
console.log(studentObj.hobbies[1])

studentObj.hobbies.forEach(hobby => {
    console.log(hobby)
})

console.log(studentObj)

studentObj.contacts = { //cia irgi sukurtas objektas objekte, tik uz jo ribu
    phone: 8657895645,
    email: 'vardas@pavarde.lt',
}

console.log(studentObj.contacts) //pasiekiamas objekto property objekte
console.log(studentObj.contacts.phone) //pasiekiamas objekte esantis objekto properties reiksme
console.log(studentObj.contacts.email)


console.log(studentObj.getFullName()) //iskvieciam funkcija

console.log(studentObj.IsActive)
studentObj.setStudentInactive()
console.log(studentObj.IsActive)

studentObj.switchStudentActivity = function(){
    // console.log(this.isActive)
    // if (this.isActive) {
    //     this.isActive = false
    // } else {
    //     this.isActive = true
    // }    
    this.isActive = !this.isActive
}

studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)


console.log(studentObj.hobbies)

studentObj.addHobby = function (hobbyToAdd) {
    console.log(hobbyToAdd)
    console.log(this.hobbies)
    this.hobbies.push(hobbyToAdd)
}

studentObj.addHobby('traveling')
console.log(studentObj.hobbies)

studentObj.removeHobby('sports')
console.log(studentObj.hobbies)