const express = require('express')
const port = process.env.PORT || 3002;
const app = express();

const { syncAndSeed, models: { Student, Campus } } = require('./db');


app.get('/', (req, res)=> res.redirect('/students'));

app.get('/students', async(req, res, next)=> {
  try {
    const students = await Student.findAll();
    const mapped = students.reduce((acc, Student)=> {
      const key = Student.brand;
      acc[key] = acc[key] || [];
      acc[key].push(Student);
      return acc;
    }, {});
    res.send(`
      <html>
        <head>
          <title>students</title>
        </head>
        <body>
          <h1>Student World (${ students.length })</h1>
          <ul>
            ${
              Object.entries(mapped).map( entry => {
                const brand = entry[0];
                const students = entry[1];
                return `
                  <li>
                    <a href='/students/${brand}'>${ brand } (${students.length})</a>
                  </li>
                `;
              }).join('')
            }
          </ul>
        </body>
      </html>
    `);
  }
  catch(ex){
    next(ex);
  }
});

app.get('/students/:brand', async(req, res, next)=> {
  try {
    const brand = req.params.brand;
    const students = await Student.findAll({
      where: {
        brand
      }
    });
    res.send(`
      <html>
        <head>
          <title>students (${brand})</title>
        </head>
        <body>
          <h1>Student World (${ students.length })</h1>
          <h2><a href='/students'>${ brand }</a></h2>
          <ul>
            ${
              students.map( Student => {
                return `
                  <li>${ Student.name }</li>
                `;
              }).join('')
            }
          </ul>
        </body>
      </html>
    `);
  }
  catch(ex){
    next(ex);
  }
});


const run = async()=> {
  try {
    await syncAndSeed();
    console.log('synced and seeded');
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

run();


// Routes
//Create a Campus
app.post('/campus', (req, res) => {
    res.send('Creating a Campus')
})

//Create a Student
app.post('/student', (req, res) => {
    res.send('Creating a Student')
})

//View a Campus
app.get('/campus/:id', (req, res) => {
    res.send('Viewing a Campus')
})

//View a Student
app.get('/student/:id', (req, res) => {
    res.send('Viewing a Student')
})

//Get All Campuses
app.get('/campuses', (req, res) => {
    res.send('All Campuses')
})

//Get All Students
app.get('/students', (req, res) => {
    res.send('All Students')
})

//Home
app.get('/', (req, res) => {
    res.send('Home')
})


app.listen(port, ()=> console.log(`listening on port ${port}`));