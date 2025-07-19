import { CalculateStatisticsUseCase } from "../../../src/application/use-cases/calculate-statistics.use-case";
import { CreatePyramidUseCase } from "../../../src/application/use-cases/create-pyramid.use-case";
import { ConsoleOutputPresenter } from "../../../src/infrastructure/cli/console-output.presenter";
import { PyramidCliController } from "../../../src/infrastructure/cli/pyramid-cli.controller";
import { ReadlineInputHandler } from "../../../src/infrastructure/cli/readline-input.handler";

describe("PyramidCliController", () => {
  let inputHandler: ReadlineInputHandler;
  let outputPresenter: ConsoleOutputPresenter;
  let createUseCase: CreatePyramidUseCase;
  let statsUseCase: CalculateStatisticsUseCase;
  let controller: PyramidCliController;

  beforeEach(() => {
    inputHandler = {
      readInput: jest.fn().mockResolvedValue({
        height: 3,
        character: "*",
        pyramidCount: 1,
        orientation: "normal",
      }),
    } as unknown as ReadlineInputHandler;

    outputPresenter = {
      present: jest.fn(),
    } as unknown as ConsoleOutputPresenter;

    createUseCase = {
      execute: jest.fn().mockReturnValue({
        lines: ["  *  ", " *** ", "*****"],
        totalLines: 3,
      }),
    } as unknown as CreatePyramidUseCase;

    statsUseCase = {
      execute: jest.fn().mockReturnValue(3),
    } as unknown as CalculateStatisticsUseCase;

    controller = new PyramidCliController(
      inputHandler,
      outputPresenter,
      createUseCase,
      statsUseCase
    );
  });

  it("deve executar o fluxo principal com sucesso", async () => {
    await controller.run();

    expect(inputHandler.readInput).toHaveBeenCalled();
    expect(createUseCase.execute).toHaveBeenCalledWith({
      height: 3,
      character: "*",
      pyramidCount: 1,
      orientation: "normal",
    });
    expect(outputPresenter.present).toHaveBeenCalledWith({
      lines: ["  *  ", " *** ", "*****"],
      totalLines: 3,
    });
    expect(statsUseCase.execute).toHaveBeenCalled();
  });

  it("deve tratar erro e imprimir mensagem no console", async () => {
    const error = new Error("Erro simulado");
    (inputHandler.readInput as jest.Mock).mockRejectedValueOnce(error);
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await controller.run();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Erro: Erro simulado");

    consoleErrorSpy.mockRestore();
  });
});
