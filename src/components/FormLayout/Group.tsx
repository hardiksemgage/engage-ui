import * as React from 'react';
import { themr } from 'react-css-themr';
import {createUniqueIDFactory} from '@shopify/javascript-utilities/other';
import {classNames} from '@shopify/react-utilities/styles';
import {wrapWithComponent} from '@shopify/react-utilities/components';

import { FORM_LAYOUT } from '../ThemeIdentifiers';
import Item from './Item';

export interface Props {
  children?: React.ReactNode,
  condensed?: boolean,
  title?: string,
  helpText?: React.ReactNode,
  style?: React.CSSProperties,
  theme?: any,
}

const getUniqueID = createUniqueIDFactory('FormLayoutGroup');

export default function Group({children, condensed, title, helpText, style, theme}: Props) {
  const className = classNames(
    condensed && theme.condensed,
  );

  const id = getUniqueID();

  let helpTextElement = null;
  let helpTextID: undefined | string;
  let titleElement = null;
  let titleID: undefined | string;

  if (helpText) {
    helpTextID = `${id}HelpText`;
    helpTextElement = <div id={helpTextID} className={theme.HelpText}>{helpText}</div>;
  }

  if (title) {
    titleID = `${id}Title`;
    titleElement = <div id={titleID} className={theme.Title}>{title}</div>;
  }

  const itemsMarkup = React.Children.map(children, (child) => wrapWithComponent(child, Item));

  return (
    <div
      role="group"
      className={className}
      aria-labelledby={titleID}
      aria-describedby={helpTextID}
      style={style}
    >
      {titleElement}
      <div className={theme.Items}>
        {itemsMarkup}
      </div>
      {helpTextElement}
    </div>
  );
}

export default themr(FORM_LAYOUT)(Group);