export class PyramidDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PyramidDomainException";
    Object.setPrototypeOf(this, PyramidDomainException.prototype);
  }

  static invalidHeight(): PyramidDomainException {
    return new PyramidDomainException(
      "Altura da pirâmide deve ser um número inteiro positivo."
    );
  }

  static invalidCharacter(): PyramidDomainException {
    return new PyramidDomainException(
      "Caractere inválido para construção da pirâmide."
    );
  }

  static invalidPyramidCount(): PyramidDomainException {
    return new PyramidDomainException(
      "Quantidade de pirâmides deve ser entre 1 e 3."
    );
  }

  static invalidOrientation(): PyramidDomainException {
    return new PyramidDomainException(
      'Orientação inválida. Use "normal" ou "inversa".'
    );
  }
}
