import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Test</h1>
    </>
  )
}
