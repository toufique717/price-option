import React, { useState } from 'react';
import List from '../List/List';
 
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Mynavbar = () => {
    const [open,setopen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" },
      ];
      
      
      
    return (
        <nav className='py-5'>

            <div onClick={()=>setopen(!open)} className=' md:hidden text-2xl'>

                {
                     
                         

                         open === true?< HiOutlineMenuAlt1></HiOutlineMenuAlt1> :<IoMdCloseCircleOutline></IoMdCloseCircleOutline> 
                     
                }

             



            </div>
            
             

            <ul className={`md:flex duration-1000 absolute py-3  md:static
            ${open? '-top-72' : 'top-12'}
                
                bg-blue-600 px-5 $ `}>
                {
                    routes.map(route =><List key={route.id} route={route}></List>)
                } 
            </ul>

            
        </nav>
    );
};

export default Mynavbar;