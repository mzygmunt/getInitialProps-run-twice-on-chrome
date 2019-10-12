import React from "react"

const Index = () => {
    return (
        <div>FOOBAR</div>
    )
}

Index.getInitialProps = () => {
    console.log("FOOBAR")
    return { fooBar: true}
}

export default Index