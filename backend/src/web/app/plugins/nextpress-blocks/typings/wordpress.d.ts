interface WPI18n {
  __(value: string): string;
}

interface WPBlockSettings {
  /**
   * Block title
   */
  title: string;
  /**
   * Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
   */
  icon: string;
  /**
   * Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
   */
  category: string;
  keywords: Array<string>;

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit(props: {}): React.ReactNode;

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save(props: {}): React.ReactNode;
}

interface WPBlock {}

interface WPBlocks {
  /**
   * Register: a Gutenberg Block.
   *
   * Registers a new block provided a unique name and an object defining its
   * behavior. Once registered, the block is made editor as an option to any
   * editor interface where blocks are implemented.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/
   * @param  {string}   name     Block name. Block names must be string that
   *                             contains a namespace prefix.
   *                             Example: my-plugin/my-custom-block.
   * @param  {Object}   settings Block settings.
   * @return {?WPBlock}          The block, if it has been successfully
   *                             registered; otherwise `undefined`.
   */
  registerBlockType(name: string, settings: WPBlockSettings): WPBlock | undefined;
}

interface WP {
  i18n: WPI18n;
  blocks: WPBlocks;
}

declare var wp: WP;
