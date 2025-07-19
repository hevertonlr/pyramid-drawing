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

    for (let i = 1; i <= height; i++) {
      lines.push(new PyramidLine(this.composeLine(i), i));
    }

    return lines;
  }

  private composeLine(lineIndex: number): string {
    const count = this.config.count.getValue();
    const isNormal = this.config.orientation === "normal";
    const spaceBetween = "  ";
    const level = isNormal
      ? lineIndex
      : this.config.height.getValue() - lineIndex + 1;

    const base = this.buildBaseLine(level);
    const invisible = " ".repeat(base.length);

    const parts: string[] = [];

    for (let i = 0; i < count; i++) {
      parts.push(i === 0 && count > 1 ? invisible : base);
    }

    return parts.join(spaceBetween);
  }

  private buildBaseLine(level: number): string {
    const height = this.config.height.getValue();
    const char = this.config.character.getValue();
    const padding = " ".repeat(height - level);
    const chars = char.repeat(level * 2 - 1);
    return `${padding}${chars}${padding}`;
  }
}
