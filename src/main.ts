import { pyramidCliController } from "./infrastructure/container/dependency-injection.container";

async function main(): Promise<void> {
  await pyramidCliController.run();
}

main();
