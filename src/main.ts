import packageJson from "../package.json";
import { printDependencies, readDependenciesFromPackageJson } from "./index";

const dependencies = readDependenciesFromPackageJson(packageJson);
printDependencies(dependencies);
