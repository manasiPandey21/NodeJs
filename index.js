const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views'); // Assuming 'profile.ejs' is in the 'views' directory

app.set('view engine', 'ejs');
app.set('views', viewsPath); // Set the views directory to the correct path

app.get('', (_, resp) => {
    resp.sendFile(`${publicpath}/index.html`);
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicpath}/about.html`);
});

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicpath}/help.html`);
});

app.get('/profile', (_, resp) => {
    const User = {
        name: 'Manasi',
        age: 19
    };
    // Render the 'profile' template with the User data
    resp.render('profile', { User });
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicpath}/nopage.html`);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
