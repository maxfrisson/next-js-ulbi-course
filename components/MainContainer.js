import Head from "next/head";
import A from "../components/A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная"></A>
        <A href={"/users"} text="Пользователи"></A>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
