const fs = require('fs')

const appConfig = {
    expo: {
        name: process.env.APP_NAME,
        slug: process.env.APP_SLUG,
        owner: process.env.APP_OWNER,
        schema: process.env.APP_SCHEMA,
        privacy: 'public',
        version: '1.0.0',
        orientation: 'portrait',
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        plugins: [
            [
                'expo-build-properties',
                {
                    ios: {
                        flipper: true,
                    },
                },
            ],
        ],
        extra: {
            eas: {
                projectId: process.env.EAS_PROJECT_ID,
            },
        },
        android: {
            package: process.env.PACKAGE_NAME,
        },
        ios: {
            bundleIdentifier: process.env.PACKAGE_NAME,
        },
    },
}

fs.writeFileSync('app.json', JSON.stringify(appConfig, null, 2))
