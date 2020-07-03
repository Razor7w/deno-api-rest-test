import { App, config } from './deps.ts';
import { api } from './api.ts'

const env = config();
const app = new App();
const PORT = parseInt(env.PORT) || 7000;

app.use('/api', api);

app.listen({ port: PORT });
// console.log(`Server running on http://localhost:${PORT}`);
// console.log(config());
