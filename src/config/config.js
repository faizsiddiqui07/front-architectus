const production = 'production'
const development = 'development'

const mode = development
let base_url = ''


if (mode === production) {
    base_url = ''
} else {
    base_url = 'https://mern-architectus-bureau.vercel.app'
}

export {base_url}