import { IInputHandler } from "../../application/interfaces/input-handler.interface";
import { IOutputPresenter } from "../../application/interfaces/output-presenter.interface";
import { CalculateStatisticsUseCase } from "../../application/use-cases/calculate-statistics.use-case";
import { CreatePyramidUseCase } from "../../application/use-cases/create-pyramid.use-case";

export class PyramidCliController {
  constructor(
    private readonly inputHandler: IInputHandler,
    private readonly outputPresenter: IOutputPresenter,
    private readonly createUseCase: CreatePyramidUseCase,
    private readonly statsUseCase: CalculateStatisticsUseCase
  ) {}

  async run(): Promise<void> {
    try {
      const input = await this.inputHandler.readInput();

      const output = this.createUseCase.execute(input);
      this.outputPresenter.present(output);

      const total = this.statsUseCase.execute();
      console.log(`Linhas acumuladas de todas as pirâmides: ${total}`);
    } catch (error) {
      console.error(`Erro: ${(error as Error).message}`);
    }
  }
}
