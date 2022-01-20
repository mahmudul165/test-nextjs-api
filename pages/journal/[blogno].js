import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("data is", data);
  const paths = await data.map((post) => {
    return {
      params: {
        blogno: post?.id?.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context?.params?.blogno;
  console.log(id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(res);
  const data = await res.json();
  console.log("data is", data);
  return {
    props: { data },
  };
};
const Details = ({ data }) => {
  const router = useRouter();
  const page = router?.query?.blogno?.toString();

  return (
    <Container>
      <h1 className="text-danger text-center">This is detail pageNo {page}</h1>
      {/* {data.map((post) => ( */}

      <div className="p-3 m-3 bg-light">
        <span className="fs-5 text-white my-3 p-3 rounded-circle bg-warning">
          {data.id}
        </span>
        <span className="fs-2 text-dark m-2 p-2">{data.title}</span>
        <p className="my-4 fw-2 text-primary">{data.body}</p>
      </div>

      {/* ))} */}
    </Container>
  );
};

export default Details;
