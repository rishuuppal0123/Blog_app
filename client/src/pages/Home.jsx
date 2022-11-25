import React from 'react'
import { Link }  from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam, eius expedita rem nam, at hic quod aliquid molestiae quasi enim cum doloremque, dolore deleniti quaerat natus perspiciatis exercitationem illo.",
      img: "https://www.shutterstock.com/image-vector/touch-futureinterface-technology-future-user-600w-503854255.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam, eius expedita rem nam, at hic quod aliquid molestiae quasi enim cum doloremque, dolore deleniti quaerat natus perspiciatis exercitationem illo.",
      img: "https://www.ordorite.com/wp-content/uploads/2017/06/tech-and-software-image-300x220.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam, eius expedita rem nam, at hic quod aliquid molestiae quasi enim cum doloremque, dolore deleniti quaerat natus perspiciatis exercitationem illo.",
      img : "https://previews.123rf.com/images/michaeljung/michaeljung1506/michaeljung150600253/40783720-mid-age-man-chopping-vegetables-in-the-kitchen.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore numquam, eius expedita rem nam, at hic quod aliquid molestiae quasi enim cum doloremque, dolore deleniti quaerat natus perspiciatis exercitationem illo.",
      img: "https://azure.wgp-cdn.co.uk/app-hobbies-and-crafts/posts/shutterstock_172868537.jpg",
    },
  ];  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src ={post.img} alt = ""/> 
              </div>
              <div className="content">
                <Link className = "link"  to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))
        }
       </div>
    </div>
  );
};

export default Home