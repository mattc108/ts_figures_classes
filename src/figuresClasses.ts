export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length less than or equal to Zero');
    }

    const maxLength: number = Math.max(this.a, Math.max(this.b, this.c));
    const maxSide: string =
      this.a === maxLength ? 'a' : this.b === maxLength ? 'b' : 'c';

    switch (maxSide) {
      case 'a':
        if (maxLength >= this.b + this.c) {
          throw new Error('Side lengths cannot create trianlge');
        }
        break;

      case 'b':
        if (maxLength >= this.a + this.c) {
          throw new Error('Side lengths cannot create trianlge');
        }
        break;

      case 'c':
        if (maxLength >= this.a + this.b) {
          throw new Error('Side lengths cannot create trianlge');
        }
        break;
    }
  }

  public shape = 'triangle';

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    const decIndex: number = area.toString().indexOf('.');

    if (decIndex === -1) {
      return area;
    }

    const stringArea: string = area.toString();
    const stringValue: string =
      stringArea.substring(0, decIndex) +
      '.' +
      stringArea.substring(decIndex + 1, decIndex + 3);

    return parseFloat(stringValue);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius length less than or equal to Zero');
    }
  }

  public shape = 'circle';

  getArea(): number {
    const area: number = Math.PI * this.r * this.r;

    const decIndex: number = area.toString().indexOf('.');

    if (decIndex === -1) {
      return area;
    }

    const stringArea: string = area.toString();
    const stringValue: string =
      stringArea.substring(0, decIndex) +
      '.' +
      stringArea.substring(decIndex + 1, decIndex + 3);

    return parseFloat(stringValue);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Side length less than or equal to Zero');
    }
  }

  public shape = 'rectangle';

  getArea(): number {
    const area: number = this.a * this.b;

    const decIndex: number = area.toString().indexOf('.');

    if (decIndex === -1) {
      return area;
    }

    const stringArea: string = area.toString();
    const stringValue: string =
      stringArea.substring(0, decIndex) +
      '.' +
      stringArea.substring(decIndex + 1, decIndex + 3);

    return parseFloat(stringValue);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
