import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import Menu from '../components/Menu'

import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src = "https://www.shutterstock.com/shutterstock/photos/1933187237/display_1500/stock-photo-easter-home-made-chocolate-egg-cookie-cake-pastry-bisquits-1933187237.jpg" alt = "" />
        <div className="user">
          <img src = "https://i.redd.it/cpslext1vx971.png" alt = "" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to = {`/write?edit=2`}> 
              <img src = {Edit} alt = ""/>
            </Link>
            <img src = {Delete} alt = ""/>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit Ea accusamus blanditiis quasi, doloribus consectetur, placeat accusantium, modi sint quidem ipsa voluptatibus ducimus et?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero maiores labore odio, eos vero? Accusamus ab omnis fuga laudantium quae repellat, assumenda numquam, aliquid tempora, iusto enim. Odit, similique nostrum est amet quidem doloribus veniam quam inventore sed neque dolor sint consequuntur. Voluptate laborum explicabo sed delectus sit nemo error quaerat id quis dolores? Odit eius dolores in saepe?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, dolore. Excepturi dolor exercitationem at amet delectus rerum fugiat possimus eius magni, rem ratione, aliquid enim recusandae. Iure pariatur incidunt eveniet, officia ad beatae aliquam quibusdam, voluptatum tenetur eligendi ipsam laborum. Saepe illo cumque quia molestias id, tempore iure exercitationem veritatis voluptates vitae consequuntur quae animi beatae vel totam voluptate assumenda laboriosam expedita, cupiditate, fuga sed ea praesentium ullam quisquam. Dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore dicta et! Eaque soluta commodi pariatur dolores repellat nemo incidunt rem, blanditiis odit dignissimos aspernatur amet laudantium reprehenderit, eius qui quia? Delectus est qui ex debitis aspernatur obcaecati, aliquid, atque reprehenderit sequi exercitationem dolore repellat deleniti, beatae saepe consequatur! Enim minima reprehenderit suscipit corporis ducimus, quis delectus quisquam cum itaque reiciendis ut, quibusdam consequatur recusandae sint at accusamus similique. Perspiciatis aut fugiat exercitationem explicabo ipsa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, reiciendis.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single