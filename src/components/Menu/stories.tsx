import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto' }}>
      <Menu {...args} />
      <p>
        Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>,
        useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a>{' '}
        no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret
        vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu.{' '}
        <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">
          Eos ex tincidunt necessitatibus, timeam theophrastus mel cu
        </a>
        . La.
      </p>
      <br />
      <br />
      <p>
        Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>,
        useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a>{' '}
        no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret
        vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu.{' '}
        <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">
          Eos ex tincidunt necessitatibus, timeam theophrastus mel cu
        </a>
        . La.
      </p>
      <br />
      <br />
      <p>
        Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>,
        useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a>{' '}
        no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret
        vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu.{' '}
        <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">
          Eos ex tincidunt necessitatibus, timeam theophrastus mel cu
        </a>
        . La.
      </p>
      <br />
    </div>
  );
};
