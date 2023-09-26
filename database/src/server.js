require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(express.json());

server.use(morgan('dev'));

server.use('*', (req, res) => {
	res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
	res.status(err.statusCode || 500).json({
		error: true,
		message: err.message,
	});
});

module.exports = server;
