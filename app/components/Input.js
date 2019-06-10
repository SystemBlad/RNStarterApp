// @flow
import * as React from 'react'
import { TextInput as TextInputPaper } from 'react-native-paper'

type Props = {
  children: any,
  onPress: any,
  icon?: any,
}
export default class TextInput extends React.Component<Props> {
  render() {
    return <TextInputPaper />
  }
}
