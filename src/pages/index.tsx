import Head from 'next/head'

type Props = {
  title: string
}

const foo = 'bar'

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
