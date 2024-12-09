import PropTypes from 'prop-types';

const Priceoption = ({option}) => {

    const {name,price,features} = option;
    return (
        <div className='bg-blue-500 p-8 rounded-2xl'>
            <p>
                <span className='text-4xl font-semibold'>{price}$/</span>
                <span>month</span>
            </p>

            <p className='text-xl mt-2'>{name}</p>
            <p className='mt-8'>
            {features.map(subidha =><ul><li>{subidha}</li></ul>)}
            </p>
        </div>
    );
};

Priceoption.propTypes = {
    
    option: PropTypes.object
}
export default Priceoption;