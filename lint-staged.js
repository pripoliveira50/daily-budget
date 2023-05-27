module.exports = {
    '*.{ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
    '!{src/@types,/**/*.test,node_modules/**/*,dist/**/*,babel.config.js,**/*.json}/*.{ts,tsx}':
        'ts-prune',
}
