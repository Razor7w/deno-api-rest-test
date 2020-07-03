import { Router, Request, Response } from './deps.ts'

const api = new Router();

api.get('/', (req: Request, res: Response) => {
  res.status(200).send({status: 'Deno Running!'});
})

api.get('/:id',  (req: Request, res: Response) => {
  res.status(200).send({ param: req.params.id});
})

export { api };