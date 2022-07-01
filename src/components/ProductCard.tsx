import React, { createContext } from 'react';
import styles from '../styles/styles.module.css';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/productInterfaces';
import { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  count,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    product,
    onChange,
    initialCounter: count,
    initialValues,
  });

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
        })}
        {/* <ProductImage img={img} name={name} />
      <ProductTitle name={name} />
      <ProductsButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  );
};
