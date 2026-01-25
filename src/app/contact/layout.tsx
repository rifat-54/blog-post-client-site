import React from 'react';

const ContactLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <h1 className='text-red-400'>this is contact layout</h1>
            {children}
        </div>
    );
};

export default ContactLayout;