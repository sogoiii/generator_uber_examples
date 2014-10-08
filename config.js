module.exports = {
  uberConfig: {
    baseUrl: 'https://api.uber.com',
    clientId: '___ENTER_YOUR_CLIENT_ID___',
    server_token : '___ENTER_YOUR_SERVER_TOKEN___',
    secret : '___ENTER_YOUR_SECRET_KEY___'
  },
  endpoints: {
    products: '/v1/products?',
    time: '/v1/estimates/time?',
    price: '/v1/estimates/price?'
  },
  locations: {
    vixletHQ: {
      latitude: '34.050108',
      longitude: '-118.253682'
    },
    universal: {
      latitude: '34.136231',
      longitude: '-118.351384'
    },    
    UCLA: {
      latitude: '34.136231',
      longitude: '-118.442402'
    },
    santaMonicaPier: {
      latitude: '34.011501',
      longitude: '-118.494995'
    },  
    LAX: {
      latitude: '33.945406',
      longitude: '-118.400474'
    },   
    disneyLand: {
      latitude: '33.810184',
      longitude: '-117.923427'
    },   
    chineseTheater: {
      latitude: '34.101575',
      longitude: '-118.342742'
    }
  }
}