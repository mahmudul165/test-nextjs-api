import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data } };
};
const bloglist = ({ data }) => {
  return (
    <Container>
      <h1 className="text-warning text-center  ">Bloglist</h1>
      {data.slice(0, 100).map((post) => (
        <Link key={post.id} href={`journal/${post.id}`}>
          <div className="  p-3 m-3 bg-light">
            <span className="fs-5 text-white m-3 p-3 rounded-circle bg-warning">
              {post.id}
            </span>
            <span className="text-primary m-2 p-2">{post.title}</span>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default bloglist;
