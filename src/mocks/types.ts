interface categoryType {
  id: number;
  name: string;
  image: string;
}
export interface cardType {
  updatedAt: any;
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: categoryType | any;
}

export type LayoutProps = {
  children: JSX.Element[];
};
