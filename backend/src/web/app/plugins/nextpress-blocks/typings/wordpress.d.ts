interface WPI18n {
  __(value: string): string;
}

interface WPBlockSettings {
  title: string;
  icon: string;
  category: string;
  keywords: Array<string>;
  edit(props: {}): React.ReactNode;
  save(props: {}): React.ReactNode;
}

interface WPBlock {}

interface WPBlocks {
  registerBlockType(name: string, settings: WPBlockSettings): WPBlock | undefined;
}

interface WP {
  i18n: WPI18n;
  blocks: WPBlocks;
}

declare var wp: WP;
