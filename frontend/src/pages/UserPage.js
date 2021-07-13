import React,{ useEffect} from 'react'

function UserPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <h1>This is User Page</h1>
        </>
    )
}

export default UserPage;
