export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqrt(value) {
    this._sqrt = value;
  }

  get sqrt() {
    return this._sqrt;
  }
}
