const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());
app.use(middleware);
app.use(logger);

let courses = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'python' },
    { id: 3, name: 'java' }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {    
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    
    courses.push(course);
    res.json(courses);
});

app.put('/courses', (req, res) => {
    const courseId = req.body.id;
    let course = courses.find(c => c.id === courseId);

    if (course) {
        course.name = "spring",
        res.json(courses);
    }
    else {
        let newCourse = {
            id: courseId,
            name: "spring"
        };

        courses.push(newCourse);
        res.json(courses);
    }
});

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    let courseIndex = courses.findIndex(c => c.id === courseId);

    if (!(courseIndex == -1)) {
        courses.splice(courseIndex, 1);
    }

    res.json(courses);
});

function middleware(req, res, next) {
    console.log("called");
    next();
}

function logger(req, res, next) {
    console.log(req.method, req.ip, req.hostname, req.url, new Date());
    next();
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
