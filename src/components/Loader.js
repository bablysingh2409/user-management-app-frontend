import React from 'react'

function Loader() {
    let circleCommonClasses = 'h-[50px] w-[50px] bg-[#0766AD] rounded-full';

    return (
        <div className='flex justify-center items-center m-auto'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
}

export default Loader