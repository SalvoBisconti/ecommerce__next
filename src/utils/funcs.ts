const BASE_URL: string = "https://api.escuelajs.co/api/v1/products/";

export const GET = async (endpoint: any = "") => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};

export const toPercentuagePrice = (price: number, percentuage: number) =>
  price - (price * percentuage) / 100;
