import readline from "readline";
import { PyramidInputDto } from "../../application/dto/pyramid-input.dto";
import { IInputHandler } from "../../application/interfaces/input-handler.interface";
import { ValidationUtil } from "../../shared/utils/validation.util";

export class ReadlineInputHandler implements IInputHandler {
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async readInput(): Promise<PyramidInputDto> {
    const ask = (question: string): Promise<string> =>
      new Promise((resolve) => this.rl.question(question, resolve));

    const heightInput = await ask("Informe a altura da pirâmide: ");
    const characterInput = await ask(
      "Informe o caractere para construir a pirâmide: "
    );
    const countInput = await ask(
      "Informe a quantidade de pirâmides (1, 2 ou 3): "
    );
    const orientationInput = await ask(
      'Informe a orientação ("normal" ou "inversa"): '
    );

    this.rl.close();

    const height = parseInt(heightInput.trim());
    const pyramidCount = parseInt(countInput.trim());
    const character = characterInput.trim();
    const orientation = orientationInput.trim().toLowerCase();

    ValidationUtil.ensureNumber(height, "Altura inválida.");
    ValidationUtil.ensureString(character, "Caractere inválido.");
    ValidationUtil.ensureNumber(pyramidCount, "Quantidade inválida.");
    ValidationUtil.ensureString(orientation, "Orientação inválida.");

    return {
      height,
      character,
      pyramidCount,
      orientation,
    };
  }
}
