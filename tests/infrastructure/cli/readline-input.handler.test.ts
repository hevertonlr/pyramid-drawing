import readline from "readline";
import { ReadlineInputHandler } from "../../../src/infrastructure/cli/readline-input.handler";
import { ValidationUtil } from "../../../src/shared/utils/validation.util";

jest.mock("readline");

// mock das funções do ValidationUtil
jest.spyOn(ValidationUtil, "ensureNumber").mockImplementation(() => {});
jest.spyOn(ValidationUtil, "ensureString").mockImplementation(() => {});

describe("ReadlineInputHandler", () => {
  let questionMock: jest.Mock;
  let closeMock: jest.Mock;

  beforeEach(() => {
    questionMock = jest.fn();
    closeMock = jest.fn();

    (readline.createInterface as jest.Mock).mockReturnValue({
      question: (q: string, cb: (a: string) => void) => cb(questionMock(q)),
      close: closeMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve ler e retornar os dados de entrada corretamente", async () => {
    questionMock
      .mockReturnValueOnce("5") // altura
      .mockReturnValueOnce("*") // caractere
      .mockReturnValueOnce("2") // quantidade
      .mockReturnValueOnce("normal"); // orientação

    const handler = new ReadlineInputHandler();
    const result = await handler.readInput();

    expect(result).toEqual({
      height: 5,
      character: "*",
      pyramidCount: 2,
      orientation: "normal",
    });

    expect(ValidationUtil.ensureNumber).toHaveBeenCalledWith(
      5,
      "Altura inválida."
    );
    expect(ValidationUtil.ensureNumber).toHaveBeenCalledWith(
      2,
      "Quantidade inválida."
    );
    expect(ValidationUtil.ensureString).toHaveBeenCalledWith(
      "*",
      "Caractere inválido."
    );
    expect(ValidationUtil.ensureString).toHaveBeenCalledWith(
      "normal",
      "Orientação inválida."
    );
    expect(closeMock).toHaveBeenCalled();
  });
});
