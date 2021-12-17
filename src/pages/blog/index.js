import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getPostList } from "../../utils/posts";

export const getStaticProps = () => {
  const postList = getPostList();
  return {
    props: {
      postList,
    },
  };
};

const Blog = ({ postList }) => {
  return (
    <>
      <Head>
        <title>Blog // UP Boutique</title>
      </Head>
      <div className="page-wrapper">
        <Header />
        <main>
          <pre>{JSON.stringify(postList, null, 2)}</pre>
        </main>
        <Footer />
      </div>
    </>
  );
};

//getStaticProps() function here

export default Blog;