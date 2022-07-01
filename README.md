# Oz-product-card

This is a sample package to deploy to npm.

## How to use?

```tsx
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'oz-product-card';
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 15,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```

## Oscar Monroy
