import { PyramidConfig } from "../value-objects/pyramid-config.vo";
import { PyramidLine } from "./pyramid-line.entity";

export class Pyramid {
  private readonly lines: PyramidLine[];

  constructor(private readonly config: PyramidConfig) {
    this.lines = this.generateLines();
  }

  getLines = (): PyramidLine[] => this.lines;
  getTotalLines = (): number => this.lines.length;

  private generateLines(): PyramidLine[] {
    const lines: PyramidLine[] = [];
    const height = this.config.height.getValue();
    const char = this.config.character.getValue();
    const count = this.config.count.getValue();
    const isNormal = this.config.orientation === "normal";

    for (let i = 1; i <= height; i++) {
      const level = isNormal ? i : height - i + 1;
      const padding = " ".repeat(height - level);
      const baseLine = padding + char.repeat(level * 2 - 1) + padding;

      let composedLine = "";

      for (let j = 0; j < count; j++) {
        if (j === 0 && count > 1) {
          // Pirâmide invisível
          composedLine += " ".repeat(baseLine.length);
        } else {
          composedLine += baseLine;
        }
      }

      lines.push(new PyramidLine(composedLine, i));
    }

    return lines;
  }
}
