import { SimplePost, themes } from '@nextpress/common';
import { ThemeProvider } from 'emotion-theming';
import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  MediaPlaceholder,
} from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { registerBlockType, BlockAlignment } from '@wordpress/blocks';

interface ISnapCarouselAttributes {
  align: BlockAlignment;
  imageUrl: string;
  title: string;
  description: string;
}

registerBlockType<ISnapCarouselAttributes>('nextpress/simple-post', {
  title: __('Simple Post'),
  icon: 'format-gallery',
  category: 'common',
  keywords: [__('nextpress — Simple Post'), __('Simple Post')],
  attributes: {
    align: {
      type: 'string',
      default: 'full',
    },
    imageUrl: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
  },
  supports: {
    align: true,
  },

  edit: ({ setAttributes, attributes }) => {
    return (
      <ThemeProvider theme={themes.light}>
        <SimplePost
          imageUrl={attributes.imageUrl}
          title={
            <RichText
              value={attributes.title}
              onChange={title => setAttributes({ title })}
              placeholder={__('Enter title...')}
              keepPlaceholderOnFocus={true}
            />
          }
          description={
            <RichText
              value={attributes.description}
              onChange={description => setAttributes({ description })}
              placeholder={__('Enter description...')}
              keepPlaceholderOnFocus={true}
            />
          }
        />
        <InspectorControls>
          <PanelBody title="Info">
            <MediaUploadCheck>
              {attributes.imageUrl && <img src={attributes.imageUrl} />}
              <MediaUpload
                onSelect={media => setAttributes({ imageUrl: media.url })}
                allowedTypes={['image']}
                render={({ open }) => (
                  <Button isPrimary onClick={open}>
                    {__('Open Media Library')}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            <TextControl
              label="Title"
              value={attributes.title}
              onChange={title => setAttributes({ title })}
            />
            <TextareaControl
              label="Description"
              value={attributes.description}
              onChange={description => setAttributes({ description })}
            />
          </PanelBody>
        </InspectorControls>
      </ThemeProvider>
    );
  },

  save() {
    return null;
  },
});
