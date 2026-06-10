import React from 'react';

const BranchPage = async() => {
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return (
        <div>
            <h1>this is branch page</h1>
        </div>
    );
};

export default BranchPage;