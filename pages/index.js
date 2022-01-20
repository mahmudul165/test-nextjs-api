import Navbar from "../components/navbar";
import Header from "../components/header";
import About from "../pages/home/about";
import Service from "../pages/info/service";
import Contact from "../pages/contact";
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return { props: { data } };
// };
const index = ({ data }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Contact />
      <About />
      {/* <Post /> */}

      {/* {data.map((post) => (
        <div key={post.id} className="fs-1 p-2 m-2 text-primary">
          {post.title}
        </div>
      ))} */}
    </>
  );
};

export default index;
