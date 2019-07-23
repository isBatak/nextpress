import { ImageText } from '@nextpress/common';

/**
 * BLOCK: nextpress-example
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('nextpress/block-example', {
  title: __('Example'),
  icon: 'dashicons-admin-users',
  category: 'common',
  keywords: [__('nextpress-blocks — Example'), __('Example')],

  edit: function() {
    return <ImageText />;
  },

  save: function() {
    return <div>test 2</div>;
  },
});
