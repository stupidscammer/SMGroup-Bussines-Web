import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center w-screen h-screen bg-auto bg-[#353535]">      
      <div className="h-8 block"></div>
      <div className="w-1/7 float-left">
        <div className="mt-9">
          <img className=" w-auto rounded-2xl" src="/img/brand.png" alt="" />
          <div className='mt-10'>
            <div className='flex justify-center'>
              <div className='  w-4/5 float-left'>
                <div class="box-border h-32 w-full p-4 border-2 rounded-lg mt-6">
                  <p className='text-white'>Include ingredients</p>
                  <input type="text" className="h-7 border-2 rounded text-white border-[#A1A1A1] bg-transparent float-left" />
                  <button class="rounded-md w-10 h-10 text-xl text-white bg-[#F29F05] mt-6">+</button>
                  <li className='text-[#A1A1A1]'>Olive Oil</li>
                  <img className="  rounded-2xl" src="/img/brand.png" alt="" width="120" height="120"/>
                </div>
                <div  class="box-border w-full h-32  p-4 border-2 rounded-lg mt-6">

                </div>
                <div  class="box-border w-full h-32  p-4 border-2 rounded-lg mt-6">

                </div>
                <button class="rounded-md w-full h-10 text-xl text-white bg-[#F29F05] mt-6">APPLY</button>
              </div>
              <div className='ml-6 h-fix    border-solid border-2 border-[#A1A1A1] '>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" mx-5 border-solid border-2  border-indigo-600 object-center float-left">
        <div className="mt-9">
          <table border='2'>
            <tr>
              <th> <input type="text" className="h-16 border-2 w-full rounded text-white border-[#A1A1A1] bg-transparent " placeHolder="Search Recipes"/></th>
              <th><img className="w-12 h-12 float-left rounded-md" src="/img/search.png" alt="" /></th>
              <th>
                <figure className="rounded-2xl h-20  bg-white w-full">
                  <img className="w-2/5 h-full float-left rounded-2xl" src="/img/brand.png" alt="" />
                  <p className="">Mohammad</p>
                </figure>
              </th>
            </tr>
            <tr>
              <td> <p className="mt-5 text-7xl font-bold text-white decoration-8 decoration-dashed decoration-white">Recommended Dishes</p></td>
              <td></td>
              <td>
                <figure className="rounded-2xl h-20  bg-white w-full">
                  <img className="w-2/5 h-full float-left rounded-2xl" src="/img/brand.png" alt="" />
                  <p className="">Mohammad</p>
                </figure>
              </td>
            </tr>
            <tr>
              <td>
                <figure className="mt-10 bg-white rounded-2xl h-80" >
                  <img className="w-2/5 h-full float-left rounded-2xl" src="/img/brand.png" alt="" />
                  <div className='p-[0_6px_0_6px] '>
                    <p className="text-4xl mt-6">Pepperonl pizza</p>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>Olive oil</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>Oregano</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>tomato</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2 '>olives</li>
                    <p className='text-lg text-[#353535] m-2.5 ml-2' >  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...  ...</p>
                  </div>         
                </figure>
              </td>
              <td></td>
              <td rowspan='2'>
                <figure className="rounded-2xl block h-[700px]  bg-white w-full">
                  <img className="w-2/5  float-left rounded-2xl" src="/img/brand.png" alt="" />
                  <p className="">Mohammad</p>
                </figure>
              </td>
            </tr>
            <tr>
              <td>
                <figure className="mt-10 bg-white rounded-2xl h-80" >
                  <img className="w-2/5 h-full float-left rounded-2xl" src="/img/brand.png" alt="" />
                  <div className='p-[0_6px_0_6px] '>
                    <p className="text-4xl mt-6">Pepperonl pizza</p>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>Olive oil</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>Oregano</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2'>tomato</li>
                    <li className='text-lg text-[#353535] m-2.5 ml-2 '>olives</li>
                    <p className='text-lg text-[#353535] m-2.5 ml-2' >  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...  ...</p>
                  </div>         
                </figure>
              </td>
              <td></td>
              
            </tr>          
          </table>
        </div>
       
{/*  <div className="h-8 block"></div> */}
        
      </div>
      {/* <div className="flex justify-center  border-solid border-2  border-indigo-600 "> */}
        

      {/* </div> */}
      



    </div>




  );
}

export default App;
