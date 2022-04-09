const swaggerOptions = {
  swaggerDefinition: {
    info: {
      description: '',
      title: 'Vila Front API',
      version: '1.0.0'
    },
    host: 'localhost:3333',
    basePath: '/',
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {}
  },
  basedir: __dirname,
  files: ['../routes/**/*.ts', '../routes/**/*.js']
}

export default swaggerOptions
