
import React, { Suspense } from "react"
const LazyComponent = React.lazy(() => import('./LazyComponent'));


const SuspenseComponent = () => {
    return (
        <>

            <h1>This is SuspenseComponent</h1>
            <Suspense fallback={<div>Loading....</div>}>

                <LazyComponent/>
            </Suspense>

        </>
    )
}

export default SuspenseComponent;