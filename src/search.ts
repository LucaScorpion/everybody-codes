import { camerasFromCsv } from './camerasFromCsv';
import yargs from 'yargs';
import { cameraToString } from './Camera';

const argv = yargs(process.argv.slice(2))
  .usage('Usage: $0 --name [name]')
  .options({
    name: { type: 'string', demandOption: true, alias: 'n', requiresArg: true }
  })
  .argv;

async function search(name: string): Promise<void> {
  const cameras = await camerasFromCsv();
  cameras
    .filter((c) => c.name.toLowerCase().includes(name.toLowerCase()))
    .forEach((c) => console.log(cameraToString(c)));
}

search(argv.name).catch((err) => console.error(`Error during search: ${err}`));
