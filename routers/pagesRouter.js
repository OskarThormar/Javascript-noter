import { Router } from 'express';

const router = Router();

import { frontpagePage } from '../util/pages.js';
router.get("/", (req, res) => {
    res.send(frontpagePage);
});

import { introductionPage } from '../util/pages.js';
router.get("/introduction", (req, res) => {
    res.send(introductionPage);
});

import { firstServerPage } from '../util/pages.js';
router.get("/firstserver", (req, res) => {
    res.send(firstServerPage);
});

import { loopMethodsPage } from '../util/pages.js';
router.get("/loopmethods", (req, res) => {
    res.send(loopMethodsPage);
});

import { htmlTimePage } from '../util/pages.js';
router.get("/htmltime", (req, res) => {
    res.send(htmlTimePage);
});

import { exportImportPage } from '../util/pages.js';
router.get("/exportimport", (req, res) => {
    res.send(exportImportPage);
});

import { clientServerPage } from '../util/pages.js';
router.get("/clientserver", (req, res) => {
    res.send(clientServerPage);
});

import { ssrPage } from '../util/pages.js';
router.get("/ssr", (req, res) => {
    res.send(ssrPage);
});

export default router;