import React from 'react';
import Priceoption from '../PriceOption/priceoption';

const PriceOptions = () => {

    const gymPlans = [
        {
          id: 1,
          name: "Basic Plan",
          price: 25, // Price in USD per month
          features: [
            "Access to gym equipment",
            "Locker room access",
            "1 group fitness class per month",
          ],
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 50, // Price in USD per month
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "1 personal training session per month",
          ],
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 75, // Price in USD per month
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "4 personal training sessions per month",
            "Access to swimming pool and sauna",
          ],
        },
        {
          id: 4,
          name: "Day Pass",
          price: 15, // Price in USD per day
          features: [
            "Full day access to gym equipment",
            "Locker room access",
          ],
        },
         
      ];
      
       
      

    return (
        <div>

            <h2 className='text-3xl'>Best price option on these Town</h2>
             <div className='grid grid-cols-4 my-10 mx-4  gap-4'>
             {
                 gymPlans.map(option => <Priceoption key={option.key} option={option}></Priceoption>)
            }
             </div>
            
        </div>
    );
};

export default PriceOptions;