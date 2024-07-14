import React, { useState } from "react";
import Card from "./Card";

const Testimonial = (props) => {
      let reviews = props.reviews;
      const [index , setIndex] = useState(0);

      function leftshiftHandler(){
         if(index-1 < 0){
            setIndex(reviews.length-1);
         }
         else{
            setIndex(index-1);
         }
      }

      function rightShiftHandler(){
         if(index >= reviews.length){
            setIndex(0);
         }
         else {
            setIndex(index+1);
         }
      }

      function surprizehandler(){
           let randomindex = Math.floor(Math.random()*reviews.length);
           setIndex(randomindex);
      }
      
    
      return(<div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow">
        <Card review = {reviews[index]}></Card>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                <button
                onClick={leftshiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    {'<<'}
                </button>
                <button 
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    {'>>'}
                </button>
             </div>

             <div>
                <button
                 onClick={surprizehandler}
                 className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    surprise Me 
                </button>
             </div>
             
        
      </div>)  
    
}

export default Testimonial;