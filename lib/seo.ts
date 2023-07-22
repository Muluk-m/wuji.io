export const seo = {
  title: '无忌',
  description:
    '这里是无忌的私人空间',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
