import pino from 'pino'

const logger = pino({
  level: 'trace',
  prettyPrint: {
    colorize: true,
    singleLine: true,
    translateTime: true
  }
})

export default logger
