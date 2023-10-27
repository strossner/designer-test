declare global {
  type BasicValues = {
    name: string;
    price: number;
  };
  type Color = BasicValues & {
    color: string;
  };
  type Motive = BasicValues & {
    img: string;
  };
  type Designer = {
    color: Color;
    motive: Motive;
  };
  type GlobalState = {
    color: Array<Color>;
    motive: Array<Motive>;
  };
}

export {};
