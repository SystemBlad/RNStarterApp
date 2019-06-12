// @flow
export function displayLog(tag: string, log: any, important: boolean = false) {
  if (__DEV__) {
    const Reactotron = require('reactotron-react-native').default
    Reactotron.display({
      name: 'LOG APP',
      preview: tag,
      value: { tag, log },
      important: important,
    })

    console.info('APP LOG: ' + tag)
    if (log) {
      console.log(log)
    }
  }
}
