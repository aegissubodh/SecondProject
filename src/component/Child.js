import React from 'react';

function Child ({name,email}) {
    return(<>
        <h1>This is name: {name}</h1>
        <h1>This is email: {email}</h1>
        </>
    )
}

export default Child;