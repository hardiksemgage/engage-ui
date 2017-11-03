import * as React from 'react';
import { FlexBox } from '../../../../src/components/';
import * as styles from '../../styles/components-page.scss';

export interface IProps{
}

export interface IState {
}

class FlexBoxExampleFirst extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.example}>
        1. Basic FlexBox:
          <FlexBox
            direction="Column"
            align="Stretch"
            justify="Center">
            <div>Demo 1</div>
            <div>Demo 2</div>
            <div>Demo 3</div>
          </FlexBox>
          <br/>
        2. Inline FlexBox:
          <FlexBox
            inline={true}
            direction="Column"
            align="Stretch"
            justify="Center">
            <div>Demo 1</div>
            <div>Demo 2</div>
            <div>Demo 3</div>
          </FlexBox>
      </div>
    );
  }
}
export default FlexBoxExampleFirst;
