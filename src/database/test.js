const DataBase = require('./db')
const createProffy = require('./createProffy.js')

//db = DataBase

DataBase.then(async(db) => {

    proffyValue = {
        name: "Valter Rogério",
        avatar: "https://twitter.com/valgner_/photo",
        whatsapp: "48999366199",
        bio: "Eu ae",        
    }

    classValue = {
        subject: "Matemática",
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })
})