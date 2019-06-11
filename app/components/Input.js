// @flow
import * as React from 'react'
import { TextInput as TextInputPaper } from 'react-native-paper'
import AppStyles from '../Config/styles'

const Input = React.forwardRef((props: Props, ref) => (
  <TextInputPaper
    underlineColor={AppStyles.colors.underlineColor}
    ref={ref}
    // theme={{ fonts: { medium: 'Open Sans' } }}
    {...props}
  />
))

Input.displayName = 'Input'

export default Input
