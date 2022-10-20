import supabase from '../config/SupabaseClient';
import Head from 'next/head';

export default function Home() {
  console.log(supabase)

  return (
    <div>
      <Head>
        <title>Luta</title>
      </Head>

      <h1>Luta, social media platform for Nigeria students.</h1>
    </div>
  )
}
