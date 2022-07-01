import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductTitleProps } from '../interfaces/productInterfaces';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ name, className, style }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {name ? name : product.name}
    </span>
  );
};
