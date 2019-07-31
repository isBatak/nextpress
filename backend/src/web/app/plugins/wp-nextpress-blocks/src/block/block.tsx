import { SnapCarousel, themes } from '@nextpress/common';
import { ThemeProvider } from 'emotion-theming';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

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
    align: true,
  },

  edit: function() {
    return (
      <ThemeProvider theme={themes.light}>
        <SnapCarousel />
        <InspectorControls>
          <PanelBody title="test">
            <SelectControl options={[{ label: '1', value: '1' }]} value="1" onChange={t => console.log(t)} />
          </PanelBody>
        </InspectorControls>
      </ThemeProvider>
    );
  },

  save: function() {
    return null;
  },
});
