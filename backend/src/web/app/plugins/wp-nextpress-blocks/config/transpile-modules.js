const PATH_DELIMITER = '[\\\\/]'; // match 2 antislashes or one slash

/**
 * On Windows, the Regex won't match as Webpack tries to resolve the
 * paths of the modules. So we need to check for \\ and /
 */
const safePath = module => module.split('/').join(PATH_DELIMITER);

const generateIncludes = modules => {
  return modules.map(module => new RegExp(`${safePath(module)}(?!.*node_modules)`));
};

const generateExcludes = modules => {
  return [new RegExp(`node_modules${PATH_DELIMITER}(?!(${modules.map(safePath).join('|')})(?!.*node_modules))`)];
};

module.exports = {
  generateIncludes,
  generateExcludes,
};
