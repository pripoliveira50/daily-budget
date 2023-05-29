import { LogBox, StatusBar, View, Text } from 'react-native'

const App = () => {
    LogBox.ignoreAllLogs()
    return (
        <View>
            <StatusBar backgroundColor="#343D64" barStyle={`light-content`} />
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
}

export default App
