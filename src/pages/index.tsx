import Head from "next/head";
import TimeLine from "../components/TimeLine";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next SNS</title>
        <meta name="description" content="Genetated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <TimeLine />
      </div>
    </>
  );
}
