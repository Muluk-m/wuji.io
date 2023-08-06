export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://wuji.io'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
