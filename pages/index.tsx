import React from "react";
import MainLogin from "../components/MainLogin";
import { getSession, GetSessionParams } from "next-auth/react";

const Home = () => {
  return <MainLogin />;
};

export async function getServerSideProps(
  context: GetSessionParams | undefined,
) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/day",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Home;
