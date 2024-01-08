interface categoryType {
  id: number;
  name: string;
  image: string;
}
export interface cardType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  updatedAt: any;
  category: categoryType | any;
}

export type LayoutProps = {
  children: JSX.Element[];
};
