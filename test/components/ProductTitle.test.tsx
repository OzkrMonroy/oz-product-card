import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components';
import ProductCard from '../../src/components/index';
import { product } from '../mocks/products';

describe('Product Title component', () => {
  test('should render the title which is provide by prop', () => {
    const wrapper = renderer.create(<ProductTitle name="Custom name" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should display the name of the product that is saved in the context', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
