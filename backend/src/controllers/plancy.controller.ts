import { FastifyRequest, FastifyReply } from 'fastify'

import PlancyService from '@services/plancy.service'
import QuotesJSON from '../quotes.json'
import { QuotesDTO } from '@utils/quotes.dto'

const PlancyController = async (app, opts) => {
  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    QuotesJSON.forEach(async ({ quote, author }: QuotesDTO) => {
      await PlancyService.createQuotes({ quote, author })
    })
    reply.send({ completed: true })
  })

  app.get('/quotes', async (request: FastifyRequest, reply: FastifyReply) => {
    const { page }: any = request.query
    const data = await PlancyService.getQuotes(parseInt(page || '0'))
    reply.send(data)
  })
}

export default PlancyController
