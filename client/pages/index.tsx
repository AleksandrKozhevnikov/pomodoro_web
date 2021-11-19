import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Home: NextPage = () => {
  const state = useTypedSelector(state => state.test)
  return (
    <div>{state.test}</div>
  )
}

export default Home
