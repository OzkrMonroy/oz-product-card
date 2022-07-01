import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductImageProps } from '../interfaces/productInterfaces';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({
  img,
  name,
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let imageToShow: string;
  let titleForAlt: string;

  if (img) {
    imageToShow = img;
  } else if (product.img) {
    imageToShow = product.img;
  } else {
    imageToShow = noImage;
  }

  if (name) {
    titleForAlt = name;
  } else if (product.name) {
    titleForAlt = product.name;
  } else {
    titleForAlt = 'Product';
  }

  return (
    <img
      src={imageToShow}
      alt={titleForAlt}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
