export interface Data {
  name: string;
  phone: string;
  information: Information[];
}

export interface Information {
  products: Products;
  quantity: number;
}

export interface Products {
  // map(arg0: ({ type, name, price, quantity, id }: Products, key: number) => JSX.Element): import("react").ReactNode;
  type: string;
  name: string;
  price: number;
  quantity: number; //
  id: number;
}
