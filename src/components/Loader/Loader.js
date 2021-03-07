import React from 'react';
import { RingLoader } from 'react-spinners';
import './Loader.css';


const AwesomeComponent = (props) => {
    return (
    <div className='CircleLoader'>



        <RingLoader

          size={90}
          color={'#440a67'}
        />
      <p className="loading-text">{ props.message} </p>
      </div>
    );

}

export default AwesomeComponent;
