import { useRef } from "react";
const BASE_URL: string = "https://api.escuelajs.co/api/v1/products/";

export const GET = async (endpoint: any = "") => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};

export const toPercentuagePrice = (price: number, percentuage: number) =>
  price - (price * percentuage) / 100;

export const imageWithFallback = (src: any, nameClass: string) => {
  const imgRef: any = useRef();
  const onImageError = () =>
    (imgRef.current.src =
      "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg");

  return (
    <img ref={imgRef} src={src} onError={onImageError} className={nameClass} />
  );
};
