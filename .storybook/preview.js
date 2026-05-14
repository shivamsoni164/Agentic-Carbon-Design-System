import '@carbon/styles/css/styles.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'White (G10)',
      values: [
        { name: 'White (G10)', value: '#ffffff' },
        { name: 'Gray 10', value: '#f4f4f4' },
        { name: 'Gray 90', value: '#262626' },
        { name: 'Gray 100', value: '#161616' },
      ],
    },
    layout: 'padded',
    docs: {
      toc: true,
    },
  },
};

export default preview;
