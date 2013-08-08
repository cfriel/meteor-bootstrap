Package.describe({
  summary: "Meteor wrapper for bootstrap"
});

Package.on_use(function (api, where) {
    api.add_files('lib/js/bootstrap.js', 'client');
    api.add_files('lib/css/bootstrap.css', 'client');
});

Package.on_test(function (api) {
    api.add_files('bootstrap_tests.js', 'client');
});
