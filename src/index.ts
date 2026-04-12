export function printDependencies(dependencies: Record<string, string>): string[] {
  return Object.entries(dependencies).map(([name, version]) => {
    const line = `${name}: ${version}`;
    console.log(line);
    return line;
  });
}

export function readDependenciesFromPackageJson(pkg: {
  dependencies?: Record<string, string>;
}): Record<string, string> {
  return pkg.dependencies ?? {};
}
