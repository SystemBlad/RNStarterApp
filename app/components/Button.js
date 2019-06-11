// @flow
import * as React from 'react'
import { Button as PaperButton } from 'react-native-paper'

type Props = {
  children: any,
  onPress: any,
  icon?: any,
  style?: any,
}
export default class Button extends React.Component<Props> {
  render() {
    return (
      <PaperButton
        icon={this.props.icon}
        onPress={this.props.onPress}
        mode="contained"
        style={this.props.style}
      >
        {this.props.children}
      </PaperButton>
    )
  }
}
