module.exports = {
  in: 'src',
  out: 'dist',
  watch: true,
  generate: {
    styles: 'sass',
    template: 'html',
    ts: false,
    shadowRoot: false,
    force: false,
    importStyles: true,
  },
};
