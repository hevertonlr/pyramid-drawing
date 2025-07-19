export class ValidationUtil {
  static ensureNumber(value: unknown, errorMessage: string): void {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(errorMessage);
    }
  }

  static ensureString(value: unknown, errorMessage: string): void {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
  }
}
