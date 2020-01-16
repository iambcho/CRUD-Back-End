const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {
  const HunterCollege = await Campus.create({
    name: "Hunter College"
  });

  const students = await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving"
    }),
    Student.create({
      firstName: "LeBron",
      lastName: "James"
    }),
    Student.create({
      firstName: "Luka",
      lastName: "Doncic"
    })
  ]);

  for (let i = 0; i < students.length; i++) {
    await students[i].setCampus(HunterCollege); // YOU CAN PASS IN EITHER THE ACTUAL INSTANCE OF THE MODEL AS AN ARGUMENT OR THE INTEGER ID OF THE MODEL THAT ALREADY EXISTS (KEEP THIS IN MIND WHEN WRITING OUT YOUR HANDLER FUNCTIONS) (YOU MIGHT HAVE A DROPDOWN OF CAMPUSES IN YOUR VIEW ASSOCIATED WITH AN ID SO THAT YOU CAN PASS THAT INFORMATION ACROSS TO THE BACKEND WHEN ESTABLISHING ASSOCIATIONS);
  }
}

module.exports = seedDatabase;
