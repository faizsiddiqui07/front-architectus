const production = 'production'
const development = 'development'

const mode = development
let base_url = ''


if (mode === production) {
    // base_url = 'https://mern-architectus-bureau.vercel.app'
} else {
    base_url = 'http://localhost:8080'
}

export {base_url}