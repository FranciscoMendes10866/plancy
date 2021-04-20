import fastify from 'fastify'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import compress from 'fastify-compress'

import { logger } from '@utils/index'
import PlancyController from '@controllers/plancy.controller'

const { NODE_ENV, CORS_ORIGIN } = process.env

let app

NODE_ENV !== 'TESTING' ? app = fastify({ logger }) : app = fastify()

app.register(cors, { origin: CORS_ORIGIN })
app.register(helmet)
app.register(compress)
app.register(PlancyController)

export default app
