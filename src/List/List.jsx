import React from 'react';
import PropTypes from 'prop-types';

const List = ({route}) => {
    const {path,name} = route;
    return (
        <div className=''>
            <li  className='mr-20 mt-5  hover:bg-white'>
                <a href={route.path}> 
                    {route.name}</a></li>
        </div>
    );
};


List.propTypes = {
    
    route: PropTypes.object,
}
export default List;