const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// GET - Retrieve all of the data from your table


// GET - Retrieve specific fields (i.e. id, names, dates, etc.)


// GET - Retrieve a data set with the following filters (use one route per filter type):


// A filter for data that contains... (e.g. name containing the string 'wcs')


// A filter for data that starts with... (e.g. name beginning with 'campus')


// A filter for data that is greater than... (e.g. date greater than 18/10/2010)


// GET - Ordered data recovery (i.e. ascending, descending) - The order should be passed as a route parameter


// POST - Insertion of a new entity


// PUT - Modification of an entity


// PUT - Toggle a Boolean value


// DELETE - Delete an entity


// DELETE - Delete all entities where boolean value is false


app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});
