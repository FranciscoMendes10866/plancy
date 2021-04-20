import 'dotenv/config'
import boom from '@hapi/boom'

import app from './app'

const { PORT, NODE_ENV } = process.env
const port = PORT || 7000

let host
NODE_ENV === 'PROD' ? host = '0.0.0.0' : host = 'localhost';

(async () => {
  try {
    await app.listen(port, host)
  } catch (err) {
    throw boom.boomify(err)
  }
})()
