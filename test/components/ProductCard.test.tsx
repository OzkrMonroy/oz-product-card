import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../../src/components/index';
import { product2 } from '../mocks/products';

const { act } = renderer;

describe('ProductCard component', () => {
  test('should render the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <h1>Hello world</h1>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ increaseBy, count }) => (
          <>
            <h1>Hello world</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
