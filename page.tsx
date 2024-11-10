import Image from "next/image";
import React from 'react';
import Header from "./component/Header";


const Home = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
        <div className="flex">
          <div className="w-[60%] flex flex-col justify-center items-start m-12">
            <h1 className="text-[40px] mt-[130px] ml-[176px] text-primary4 ">
              IMPECCABLE<br/>
              CRAFTSMANSHIP AND<br/>
              FINESSE</h1>

            <p white-spacing className="text-[30px] text-primary3 ml-[176px] mt-[12px] ">
              An example of intricate workmanship and detail, elegant
              necklaces and long and short chains form a part of our
              desirable collection.</p>

             <button className="text-[30px] ml-[176px] mt-[25px] bg-primary2
                                 rounded px-[20px]">
              Explore Now</button>  
          </div>

          <div className="w-1/2 flex justify-center items-center ">
            <Image
            src={"/images/pic1.jpeg"}
            alt="Hero Image"
            width={442}
            height={611}
            className="mr-[24px] mt-[28px]"
            />
          </div>
        </div>
    </div>
  )
}

export default Home;