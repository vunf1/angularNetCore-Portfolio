import * as Koa from 'koa';
import * as serve from 'koa-static';

import { readFileSync } from 'fs';
import { join } from 'path';

// the middileware universal.ts
// https://gist.github.com/ashokvishwakarma/7c97578108e49fb38d06777e8319bb24
import universal from './universal';

// construct the dist/browser folder path here
// where your have all the static files 
// for your web application
const BORWSER_DIR = join(process.cwd(), 'dist', 'browser');

const app: Koa = new Koa();

app
  .use(serve(BORWSER_DIR, {
    // important so that koa-static does not serve index.html
    // as directory index
    index: false,
    gzip: true
  }))
  .use(universal);

app.listen(4000);