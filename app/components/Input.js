// @flow
import * as React from 'react'
import { Button as PaperButton, TextInput as TextInputPaper } from 'react-native-paper'

type Props = {
  placeholder?: string,
  label?: string,
  value?: string,
  onChangeText?: any,
  style?: any,
}
// export default class TextInput extends React.Component<Props> {
//   render() {
//     return (
//       <TextInputPaper
//         // placeholder={this.props.placeholder}
//         label={this.props.label}
//         value={this.props.value}
//         onChangeText={this.props.onChangeText}
//         style={this.props.style}
//       />
//     )
//   }
// }

export default function FancyButton(props) {
  return <TextInputPaper mode="contained" theme={{ fonts: { medium: 'Open Sans' } }} {...props} />
}
