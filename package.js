Package.describe({
  summary: "Draws simple SVG flow chart diagrams from textual representation of the diagram."
});

Package.on_use(function (api) {
  api.use(['jquery', 'raphael'], 'client');
  api.add_files('lib/release/fowchart-1.3.2.js', 'client');
  api.add_files('export.js', 'client');
  api.export('Flowchart');
});