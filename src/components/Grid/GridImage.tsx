import * as React from 'react';
import { themr, ThemedComponentClass } from '@friendsofreactjs/react-css-themr';
import { classNames } from '@shopify/react-utilities/styles';
import { GRID } from '../ThemeIdentifiers';
import * as baseTheme from './Grid.scss';

export type GridType = 'block' | 'list';

// All prototypes type
export interface Props {
  children?: React.ReactNode;
  // Custom style
  componentStyle?: any;
  // Set a custom class
  componentClass?: string;
  // Theme to be injected via css-themr
  theme?: any;
}

const GridImage = ({
  children,
  componentClass,
  componentStyle,
  theme,
}: Props) => {
  const gridImageClass = classNames(
    theme.gridImage,
    componentClass
  );

  return <div style={componentStyle} className={gridImageClass}>{children}</div>;
};

export default themr(GRID, baseTheme)(GridImage) as ThemedComponentClass<Props, {}>;
