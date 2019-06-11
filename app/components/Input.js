// @flow
import * as React from 'react'
import { TextInput as TextInputPaper, withTheme } from 'react-native-paper'
import type { Theme } from 'react-native-paper'

type Props = {
  theme: Theme,
}

function FancyInput(props: Props) {
  const { colors } = props.theme
  return (
    <TextInputPaper
      underlineColor={colors.underlineColor}
      mode="contained"
      theme={{ fonts: { medium: 'Open Sans' } }}
      {...props}
    />
  )
}

export default withTheme(FancyInput)
