import supabase from '../config/SupabaseClient';
import Head from 'next/head';
import SignUp from './SignUp';

export default function Home() {
  console.log(supabase)

  return (
    <div>
      <Head>
        <title>Luta</title>
      </Head>
      <SignUp />
    </div>
  )
}
