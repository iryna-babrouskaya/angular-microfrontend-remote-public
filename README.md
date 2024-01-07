# AngularMicrofrontendRemote

<pre>Project uses Angular 15</pre>

This repository is for Remote (Microfrontend) application. 
Initial routing looks like
```
remote (/remote)
|
|--home remote page without params in path (/home)
|--remote page with params in path (/page/:id)
|--remote subpage with params in path (/page/:id/subpage)
|--error remote page
```

## Prepare the current application:

1. Add Module Federation (as far as I use angular 15, I followed [instruction](https://www.npmjs.com/package/@angular-architects/module-federation/v/15.0.3#usage-%EF%B8%8F))

```
npm install --save-dev @angular-architects/module-federation@^15.0.0
ng add @angular-architects/module-federation@^15.0.0
```

2. Update `webpack.config.js`.
Remote would has url "http://localhost:30000/remoteEntry.js"

```
[...]
plugins: [
    new ModuleFederationPlugin({
        [...]
        remote: {
          "remoteExample": "http://localhost:30000/remoteEntry.js",
        },
        [...]
    }),
    [...]
]
[...]
```


