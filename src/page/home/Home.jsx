import React from 'react';
import urban from '../../assets/UrbanUtopia.png'
import image1 from '../../assets/Frame 133.png'
import image2 from '../../assets/image 64.png'
import image3 from '../../assets/image 76.png'

const Home = () => {
    return (
        <div className='container mx-auto'>
           <div className='flex justify-center items-center  mt-14'>
              <img src={urban} alt="" />
           </div>
         <div className='grid grid-cols-3 mt-14'>
         <div className="card w-[470px] h-[700px] card-side bg-base-100 shadow-xl">
             <figure><img src={image1} alt="Movie"/>
            </figure>
        </div>
         <div className="card w-[470px] h-[700px] card-side bg-base-100 shadow-xl">
             <figure><img src={image2} alt="Movie"/>
            </figure>
        </div>
         <div className="card w-[470px] h-[700px] card-side shadow-xl">
             <figure><img src={image3} alt="Movie"/>
            </figure>
        </div>
         </div>
      </div>
    );
};

export default Home;
