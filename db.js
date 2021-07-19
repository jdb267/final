
const Sequelize = require('sequelize');
const { STRING } = Sequelize.DataTypes;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/junior_final' );

const students = [
    {firstName: 'Jordan',
        lastName: 'Blackwell',
        email: 'jordan@blackwell.com',
        imageUrl: 'imagestring',
        gpa: '3.4',},
        {firstName: 'Lauren',
        lastName: 'Dawn',
        email: 'lauren@dawn.com',
        imageUrl: 'imagestring',
        gpa: '3.9',},
        {firstName: 'Deanna',
        lastName: 'Jean',
        email: 'deanna@jean.com',
        imageUrl: 'imagestring',
        gpa: '4.0',},
]

const campuses = [
    {name:'Hogwarts',
imageUrl:'imagestring',
address: '123 Main St',
description:'yada yada yada'},{name:'Other campus',
imageUrl:'imagestring',
address: '123 Main St',
description:'yada yada yada'},{name:'Other campus 2',
imageUrl:'imagestring',
address: '123 Main St',
description:'yada yada yada'}
]



const Student = conn.define('student', {
    firstName: STRING,
    lastName: STRING,
    email: STRING,
    imageUrl: STRING,
    gpa: STRING,  
  });

  const Campus = conn.define('campus', {
    name: STRING,
    imageUrl: STRING,
    address: STRING,
    description: STRING
  
  });



  
  const syncAndSeed  = async()=> {
    await conn.sync({ force: true });
    await Promise.all(
      students.map( student => Student.create(student))
    );
    await Promise.all(
        campuses.map( campus => Campus.create(campus))
      );
  };
  
  
  module.exports = {
    db,
    syncAndSeed,
    models: {
      Student,
      Campus
    }
  };