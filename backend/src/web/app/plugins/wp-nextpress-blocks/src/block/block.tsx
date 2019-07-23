import { SnapCarousel } from '@nextpress/common';
import { ThemeProvider } from 'emotion-theming';

/**
 * BLOCK: nextpress/example
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const theme = {
  color: 'hotpink',
  backgroundColor: 'white',
  box: {
    backgroundColor: 'white',
  },
};

registerBlockType('nextpress/snap-carousel', {
  title: __('Snap Carousel'),
  icon: 'format-gallery',
  category: 'common',
  keywords: [__('nextpress — Snap Carousel'), __('Snap Carousel')],
  attributes: {
    align: {
      type: 'string',
      default: 'full',
    },
  },
  supports: {
    align: false,
  },

  edit: function() {
    return (
      <ThemeProvider theme={theme}>
        <SnapCarousel />
      </ThemeProvider>
    );
  },

  save: function() {
    return null;
  },
});
