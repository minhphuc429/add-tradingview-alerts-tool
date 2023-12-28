import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['dotenv/config'],
        coverage: {
            provider: 'v8', // or 'istanbul'
            reporter: "cobertura",
            reportsDirectory: "./coverage"
        },
    },
})
