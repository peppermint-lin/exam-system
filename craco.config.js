const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3B90FF',
              '@border-radius-base': '5px',
              '@text-color': '#181818'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};