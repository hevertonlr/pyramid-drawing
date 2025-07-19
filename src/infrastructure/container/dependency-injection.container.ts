import { ConsoleOutputPresenter } from "../cli/console-output.presenter";
import { ReadlineInputHandler } from "../cli/readline-input.handler";
import { PyramidGeneratorService } from "../generators/pyramid-generator.service";
import { MemoryPyramidRepository } from "../repositories/memory-pyramid.repository";

import { CalculateStatisticsUseCase } from "../../application/use-cases/calculate-statistics.use-case";
import { CreatePyramidUseCase } from "../../application/use-cases/create-pyramid.use-case";
import { PyramidCliController } from "../cli/pyramid-cli.controller";

// Adaptadores e serviços
const inputHandler = new ReadlineInputHandler();
const outputPresenter = new ConsoleOutputPresenter();
const pyramidGenerator = new PyramidGeneratorService();
const pyramidRepository = new MemoryPyramidRepository();

// Casos de uso
const createUseCase = new CreatePyramidUseCase(
  pyramidGenerator,
  pyramidRepository
);
const statsUseCase = new CalculateStatisticsUseCase(pyramidRepository);

// Controller CLI
export const pyramidCliController = new PyramidCliController(
  inputHandler,
  outputPresenter,
  createUseCase,
  statsUseCase
);
