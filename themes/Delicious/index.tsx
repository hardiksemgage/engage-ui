import * as React from 'react';
import { ThemeProvider } from 'react-css-themr';

const contextTheme = {
  // PButton: require('./Button.scss'),
  // PButtonGroup: require('./ButtonGroup.scss'),
  // PConnected: require('./Connected.scss'),
  // PDisplayText: require('./DisplayText.scss'),
  // PIcon: require('./Icon.scss'),
  // PLabel: require('./Label.scss'),
  // PLabelled: require('./Labelled.scss'),
  // PMessage: require('./Message.scss'),
  // PTextField: require('./TextField.scss'),
  // PDatePicker: require('./DatePicker.scss'),
};

export default (props: any) => {
    return (
        <ThemeProvider theme={contextTheme}>
            {props.children}
        </ThemeProvider>
    )
}