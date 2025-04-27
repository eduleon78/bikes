import express from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import error from './middlewares/errors.js';

import indexRouter from './routes/index.js';
import bicicletasRouter from './routes/bicicletas.js';

const __dirname = process.cwd();
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      frameSrc: ["'self'"],
    },
    reportOnly: true, // Set to 'true' to enable report-only mode
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', indexRouter);
app.use('/bicicletas', bicicletasRouter);

app.use(error.e401);
app.use(error.e403);
app.use(error.e404);
app.use(error.e500);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
