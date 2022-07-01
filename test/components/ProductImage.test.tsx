import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../mocks/products';

describe('Product Image component', () => {
  test('should render the image that is passed by props', () => {
    const wrapper = renderer.create(
      <ProductImage
        img={'https://beautifulurl.com/image.jpg'}
        name="Custom image"
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should display the product image when nothing is sended', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
