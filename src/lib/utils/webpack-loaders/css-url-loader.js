const path = require('path');

module.exports = function (source) {
  const filename = path.basename(this.resourcePath);

  const assetInfo = { sourceFilename: filename };

  const options = this.getOptions();

  const basePath = options?.basePath || '';

  if (basePath) {
    source = source.replace(/(["'])(\/[^\1]*?)\1/g, (match, p1, p2) => {
      // Check if group2 is a relative path

      if (p2 && p2.startsWith('/public')) {
        const relativePath = path.relative(path.dirname(this.resourcePath), process.cwd()).toString().replaceAll('\\', '/');
        const newMatch = [match[0], relativePath, match.slice(1)].join('');
        console.log(`[Next.config] Resolving ${match} to ${newMatch}`);
        return newMatch;
      }

      return match;
    });
  }

  this.emitFile(filename, source, null, assetInfo);
  return source;
};
