import type { Preview } from "@storybook/react";
import '../src/styles/reset.css';
import '../src/styles/color.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
