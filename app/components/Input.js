// @flow
import * as React from 'react'
import { TextInput as TextInputPaper } from 'react-native-paper'

type Props = {
  placeholder?: string,
  label?: string,
  value?: string,
  onChangeText?: any,
  style?: any,
}
export default class TextInput extends React.Component<Props> {
  render() {
    return (
      <TextInputPaper
        placeholder={this.props.placeholder}
        label={this.props.label}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={this.props.style}
      />
    )
  }
}
