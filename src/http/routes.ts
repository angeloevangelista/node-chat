import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.render('index.html');
});

routes.get('/chat/:username', (request, response) => {
  console.log(request.params.username);
  return response.render('chat.html');
});

export default routes;
