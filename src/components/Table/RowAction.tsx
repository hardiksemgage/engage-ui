import * as React from 'react';
import { themr, ThemedComponentClass } from '@friendsofreactjs/react-css-themr';

import { TABLE } from '../ThemeIdentifiers';

import Button from '../Button';
import Dropdown from '../Dropdown';

// import { DropdownItemProps } from '../';

import * as baseTheme from './Table.scss';
import * as Expression from './expression';

interface expressionFunction {
  (data: any, config: any): boolean;
}
type expressionType = string | expressionFunction;
interface renderProps {
  expression: expressionType;
  key? : string;
}

export interface Props {
  data?: any;
  render?: renderProps;
  // Individual row action, if available add it in last of the column
  actionConfig: any;
  theme?: any;
  rowActionLeft?: boolean;
  actionInProgress?: boolean;
}

export interface State {
  active: boolean;
  anchorEl?: HTMLElement;
}

class RowAction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  dropdownToggle = (e: React.FormEvent<HTMLElement>) => {
    this.setState({
      anchorEl: e ? e.currentTarget as HTMLElement : this.state.anchorEl,
      active: !this.state.active
    });

    // return () =>  item.action(this.props.dataId);
  }

  getActions = (actionConfig: any, data: any) => {
    if (typeof(actionConfig) === 'function') {
      return actionConfig(data);
    }
    return actionConfig.filter((action: any) => {
      if (action.render) {
        const { expression, key } = action.render;
        if (typeof(expression) === 'string') {
          const dataToPass = key ? data[key] : data;
          const isValidAction = Expression.evalExpression(expression, dataToPass);
          return isValidAction;
        }
        if (typeof(expression) === 'function') {
          return expression(action, data);
        }
        return false;
      }
      return true;
    });
  }

  render () {
    const { actionConfig, data, rowActionLeft, actionInProgress, theme } = this.props;
    const validActionConfigs = this.getActions(actionConfig, data);
    return (
      <React.Fragment>
        <Button theme={theme} componentClass={theme.rowActionButton} disabled={actionInProgress} icon="horizontalDots" onClick={(e: React.FormEvent<HTMLElement>) => this.dropdownToggle(e)} />

        <Dropdown
          dropdownItems={validActionConfigs}
          toggle={() => this.dropdownToggle}
          anchorEl = {this.state.anchorEl}
          returnValue={data.id}
          closeOnClickOutside
          preferredAlignment={ rowActionLeft ? 'left' : 'right' }
          theme={theme}
        />
      </React.Fragment>
    );
  }
}

export default themr(TABLE, baseTheme)(RowAction) as ThemedComponentClass<Props, State>;
