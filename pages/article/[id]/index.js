import {useRouter} from "next/router";
import Link from "next/link";
import {server} from "../../../config/index,js";
import Meta from "../../../components/Meta";

export default function Article({article}) {
  //   const router = useRouter();
  //   const {id} = router.query;
  const {title, id, body} = article;
  return (
    <>
      <Meta title={title} />
      <h1>{title}</h1>
      <p>{body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}
//Method 1 using getServerSideProps
/*
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    
    const article = await res.json();
    
    return {
        props: {
            article,
        },
    };
};
*/

//Method 2 using getStaticPaths && getStaticProps
/**
 using rest api
 export const getStaticPaths = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
   
   const articles = await res.json();
   
   const ids = articles.map((article) => article.id);
   
   const paths = ids.map((id) => ({
     params: {id: id.toString()},
    }));
    console.log(paths, "awesome");
    
    return {
      paths,
      fallback: false,
    };
    // paths: {
      //   params: {
        //     id: "1",
        //     id: "2",
        //   },
        // },
      };
      
      export const getStaticProps = async (context) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
        
        const article = await res.json();
        
        return {
          props: {
            article,
          },
        };
      };
      
      */

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({
    params: {id: id.toString()},
  }));
  console.log(paths, "awesome");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
