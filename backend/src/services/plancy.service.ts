import { prisma } from '@providers/prisma.provider'

import { QuotesDTO } from '@utils/quotes.dto'

class PlancyService {
  async createQuotes ({ quote, author }: QuotesDTO) {
    return await prisma.quotes.create({
      data: { quote, author }
    })
  }

  async getQuotes (pageNumber: number) {
    const PAGE_SIZE = 3
    const quotes = await prisma.quotes.findMany({
      skip: PAGE_SIZE * pageNumber,
      take: PAGE_SIZE
    })
    const items = await prisma.quotes.count()
    const pages = Math.ceil(items / PAGE_SIZE)
    return { pages, quotes }
  }
}

export default new PlancyService()
