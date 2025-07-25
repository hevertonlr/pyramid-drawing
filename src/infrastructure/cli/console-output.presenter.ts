import { PyramidOutputDto } from "../../application/dto/pyramid-output.dto";
import { IOutputPresenter } from "../../application/interfaces/output-presenter.interface";

export class ConsoleOutputPresenter implements IOutputPresenter {
  present(output: PyramidOutputDto): void {
    console.log("\nResultado da(s) pirâmide(s):\n");
    output.lines.forEach((line) => console.log(line));
    console.log(`\nTotal de linhas desenhadas: ${output.totalLines}\n`);
  }
}
