import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const introduction = readPage('./public/pages/introduction/introduction.html');
export const introductionPage = constructPage(introduction);

const firstServer = readPage('./public/pages/firstServer/firstServer.html');
export const firstServerPage = constructPage(firstServer);

const loopMethods = readPage('./public/pages/loopmethods/loopmethods.html');
export const loopMethodsPage = constructPage(loopMethods);

const htmlTime = readPage('./public/pages/htmltime/htmltime.html');
export const htmlTimePage = constructPage(htmlTime);

const exportImport = readPage('./public/pages/exportimport/exportimport.html');
export const exportImportPage = constructPage(exportImport);

const clientServer = readPage('./public/pages/clientserver/clientserver.html');
export const clientServerPage = constructPage(clientServer);

const ssr = readPage('./public/pages/ssr/ssr.html');
export const ssrPage = constructPage(ssr);

/*const matches = readPage('./public/pages/');
export const matchesPage = constructPage(matches, 
    {
        title: '', 
        cssLinks: '<link rel="stylesheet" href="/pages/.css">'
    }
);*/