const DataBase = require('./db')
const createProffy = require('./createProffy.js')

//db = DataBase

DataBase.then(async (db) => {

    proffyValue = {
        name: "Valter Rogério",
        avatar: "https://twitter.com/valgner_/photo",
        whatsapp: "48999366199",
        bio: "Eu ae",
    }

    classValue = {
        subject: 1,
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

    //   await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //consultar dados

    //todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
   // console.log(selectedProffys)

    //classes de um determinado proffy e trazer os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
  //  console.log(selectClassesAndProffys)


    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

   // console.log(selectClassesSchedules)


})