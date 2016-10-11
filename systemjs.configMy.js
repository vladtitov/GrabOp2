(function (global) {
  var map = {
    //angular
    '@angular': 'node_modules/@angular',
    '@angular2-material': 'node_modules/@angular2-material',
    'rxjs': 'node_modules/rxjs',
    'app': 'app',
    //thirdparty
   // "angular2-masonry": "node_modules/angular2-masonry",
  };

  var paths = {
    //"masonry-layout": "node_modules/masonry-layout/dist/masonry.pkgd.js"
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'guest': { main: 'guest.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
   // "angular2-masonry": { defaultExtension: 'js', main: "index" }
  };

  var angularPackages = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'forms'
  ];

  angularPackages.forEach(function (name) {
    packages['@angular/' + name] = {
     // format: 'cjs',
      main: 'bundles/' + name + '.umd.js',
      defaultExtension: 'js'
    };
  });

  var materialComponents = [
    'checkbox',
    'core',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs'
  ];

  materialComponents.forEach(function (name) {
    packages[("@angular2-material/" + name)] = {
     // format: 'cjs',
      main: name + '.umd.js',
      defaultExtension: 'js'
    };
  });

  var config = {
    map: map,
    packages: packages,
    paths: paths
  };

  System.config(config);

})(this);
