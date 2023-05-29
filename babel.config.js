module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',

                {
                    root: '.',
                    extensions: ['.js', '.ts', '.tsx'],
                    alias: {
                        '@components': './src/components',
                        '@screens': './src/screens',
                        '@config': './src/config',
                        '@utils': './src/utils',
                        '@assets': './src/assets',
                        '@hooks': './src/hooks',
                        '@services': './src/services',
                        '@global': './src/global',
                        '@routes': './src/routes',
                        '@context': './src/context',
                    },
                },
            ],
            'react-native-reanimated/plugin',
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    allowUndefined: false,
                },
            ],
        ],
    }
}
