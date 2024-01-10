const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angularMicrofrontendRemote",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // update starts here
        name: "remoteWithRoutingWebComponentsSolution",
        filename: "remoteEntry.js",
        exposes: {
          "./RemoteWebComponent": "./src/bootstrap.ts",
        },
        // update ends here
        shared: share({
          "@angular/core": {
            requiredVersion: 'auto'
          }, 
          "@angular/common": {
            requiredVersion: 'auto'
          }, 
          "@angular/common/http": {
            requiredVersion: 'auto'
          }, 
          "@angular/router": {
            requiredVersion: 'auto'
          },

          ...sharedMappings.getDescriptors()
        })
    }),
    sharedMappings.getPlugin()
  ],
};
