export const emailConfig = {
  from: 'hi@wuji.io',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://wuji.io`
      : 'http://localhost:3000',
}
