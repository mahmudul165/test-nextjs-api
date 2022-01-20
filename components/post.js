import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
 

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {props:{ data}}
}
const Post = ({data}) => {
//      const [data, setstate] =useState([]);
//        useEffect(() => {
//           fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => setstate(data)); 
//        }, [ ])
     return (
         <Container>
             <h1>mahmudul hasan</h1>
             <h3 className="text-danger">quadque</h3>
              
             {
                 data.map(post => <div key={post.id} className="fs-1 p-2 m-2 text-primary">{ post.title}</div>)
             }  
         </Container>
     )
 }
 
 export default Post
 