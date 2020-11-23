const PORT = process.env.PORT || 3001;

import app from './app';

app.listen(PORT, () =>
  console.log(`Server is listening at http://127.0.0.1:${PORT}`),
);
