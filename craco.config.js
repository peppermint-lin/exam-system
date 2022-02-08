const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#67A1F3',
              '@border-radius-base': '10px',
              '@text-color': '#181818'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};