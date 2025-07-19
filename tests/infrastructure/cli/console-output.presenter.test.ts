import { PyramidOutputDto } from "../../../src/application/dto/pyramid-output.dto";
import { ConsoleOutputPresenter } from "../../../src/infrastructure/cli/console-output.presenter";

describe("ConsoleOutputPresenter", () => {
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("deve exibir as linhas da pirâmide e o total de linhas corretamente", () => {
    const output: PyramidOutputDto = {
      lines: ["  *  ", " *** ", "*****"],
      totalLines: 3,
    };

    const presenter = new ConsoleOutputPresenter();
    presenter.present(output);

    expect(logSpy).toHaveBeenCalledWith("\nResultado da(s) pirâmide(s):\n");
    expect(logSpy).toHaveBeenCalledWith("  *  ");
    expect(logSpy).toHaveBeenCalledWith(" *** ");
    expect(logSpy).toHaveBeenCalledWith("*****");
    expect(logSpy).toHaveBeenCalledWith("\nTotal de linhas desenhadas: 3\n");
    expect(logSpy).toHaveBeenCalledTimes(5); // 1 título + 3 linhas + 1 total
  });
});
