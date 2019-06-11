// @flow
import * as React from 'react'
import { Button as PaperButton } from 'react-native-paper'

export default function FancyButton(props) {
  return <PaperButton mode="contained" theme={{ fonts: { medium: 'Open Sans' } }} {...props} />
}
