export class Pizza {
  private _id: number;
  private _name: string;
  private _details: string;
  private _category: string;
  private _image: string;
  private _price: number;
  private _available_amount: number;
  private _ordered_amount: number;

  constructor(id: number, name: string, details: string, category: string, image: string, price: number, available_amount: number, ordered_amount: number) {
    this._id = id;
    this._name = name;
    this._details = details;
    this._category = category;
    this._image = image;
    this._price = price;
    this._available_amount = available_amount;
    this._ordered_amount = ordered_amount;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get details(): string {
    return this._details;
  }

  get category(): string {
    return this._category;
  }

  get image(): string {
    return this._image;
  }

  get price(): number {
    return this._price;
  }

  get available_amount(): number {
    return this._available_amount;
  }


  get ordered_amount(): number {
    return this._ordered_amount;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set details(value: string) {
    this._details = value;
  }

  set category(value: string) {
    this._category = value;
  }

  set image(value: string) {
    this._image = value;
  }

  set price(value: number) {
    this._price = value;
  }

  set available_amount(value: number) {
    this._available_amount = value;
  }

  set ordered_amount(value: number) {
    this._ordered_amount = value;
  }
}
