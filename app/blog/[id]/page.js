



import React from 'react';
import axios from 'axios';
import Single from '../single';
export async function  generateStaticParams(){
  const res = await axios.get('https://bored-flannel-nightgown-tick.cyclic.app/get');
  return res.data.map((item)=>({id:item._id}))

}
 async function BlogPage({params:{id}}) {
  
  const res = await axios.get(`https://bored-flannel-nightgown-tick.cyclic.app/get/${id}`);

  const data = res.data

// this code reated to single_post




   




console.log('the content work' , data )



  return (
    <>
    <Single id={id}/>
    </>
    
  );
}

export default BlogPage;


