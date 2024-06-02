use lift_tracker;
db.dropDatabase();

db.runs.insertMany([
    {
        date: "20/5/24",
        weight: 50,
        reps: 8
    },
    {
        date: "19/5/24",
        weight: 5,
        reps: 0.5
    },
]);