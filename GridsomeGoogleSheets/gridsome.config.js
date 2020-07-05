// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '18Pratkg9OkN_N4mnU64o4gsMN2B_-R15eYdxPVzH2qk', 
        apiKey: 'AIzaSyBWqAADDhcI7E8Q1wy7ETt1I8XkyQ2jUXE',
        //sheetId: '1WNcRrDzxyoy_TRm9v15VSGwEiRPqJhUhReq0Wh8Jp14', 
        //apiKey: 'AIzaSyC1W4exVhq928gZz6_9wYmrGjrL2eEDcA8',
        route: '/:Id', //Optional - omit if not using routes
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
    }
  }
  ]
}
