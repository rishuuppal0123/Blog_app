import React from 'react'

const Menu = () => {

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
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
  )
}

export default Menu