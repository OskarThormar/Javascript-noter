import express from 'express';

const app = express();

app.use(express.static("public"));


import frontpageRouter from './routers/pagesRouter.js';
app.use(frontpageRouter);

import introductionRouter from './routers/pagesRouter.js';
app.use(introductionRouter);

import firstServerRouter from './routers/pagesRouter.js';
app.use(firstServerRouter);

import loopMethodsRouter from './routers/pagesRouter.js';
app.use(loopMethodsRouter);

import htmlTimeRouter from './routers/pagesRouter.js';
app.use(htmlTimeRouter);

import exportImportRouter from './routers/pagesRouter.js';
app.use(exportImportRouter);

import clientServerRouter from './routers/pagesRouter.js';
app.use(clientServerRouter);





const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("server is running on port", PORT));