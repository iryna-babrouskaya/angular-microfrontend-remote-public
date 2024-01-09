const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  devServer: {
    allowedHosts: [
      'localhost:30000',
      '.rockspoon.io',
      'localhost',
    ],
  },
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
        name: "remoteWithRouting",
        filename: "remoteEntry.js",
        exposes: {
          "./RootModule": "./src/app/root.module.ts",
          "./PagesModule": "./src/app/pages.module.ts",
        },
        // update ends here

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },

          ...sharedMappings.getDescriptors()
        })
    }),
    sharedMappings.getPlugin()
  ],
};
