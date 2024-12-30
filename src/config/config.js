const production = 'production'
const development = 'development'

const mode = production
let base_url = ''


if (mode === production) {
    base_url = 'http://localhost:8080'
} else {
    base_url = 'https://mern-architectus-bureau.vercel.app'
}

export {base_url}