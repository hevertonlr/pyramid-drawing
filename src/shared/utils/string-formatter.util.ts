export class StringFormatter {
  static repeat(char: string, times: number): string {
    return new Array(times + 1).join(char);
  }

  static padBothSides(content: string, totalLength: number): string {
    const totalPadding = totalLength - content.length;
    if (totalPadding <= 0) return content;
    const padLeft = Math.floor(totalPadding / 2);
    const padRight = totalPadding - padLeft;
    return " ".repeat(padLeft) + content + " ".repeat(padRight);
  }
}
