module.exports = {
    reactScriptsVersion: 'react-scripts',
    style: {
      sass: {
        loaderOptions: {
          additionalData: `@import "src/shared/styles/index.scss";`
        }
      }
    }
  }; 