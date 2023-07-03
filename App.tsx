import { View } from 'react-native'
import React from 'react'
import { Container } from './src/container'
import { Provider } from 'react-redux'
import { store } from 'features/store'
import FlashMessage from "react-native-flash-message";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs()

export const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Container />
        <FlashMessage
          position="top"
        />
      </View>
    </Provider>
  )
}

export default App