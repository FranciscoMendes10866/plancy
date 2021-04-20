import { prisma } from '@providers/prisma.provider'

import { QuotesDTO } from '@utils/quotes.dto'

class PlancyService {
  async createQuotes ({ quote, author }: QuotesDTO) {
    return await prisma.quotes.create({
      data: { quote, author }
    })
  }

  async getQuotes (page: number) {
    return await prisma.quotes.findMany({
      skip: 3 * page,
      take: 3
    })
  }
}

export default new PlancyService()
