import * as React from "react"
import PostItem from "../PostItem"


const Hit = ( { hit }) => (
    <PostItem
        slug={hit.fields.slug}
        background={hit.background}
        color={hit.color}
        title={hit.title}
        date={hit.date}
        description={hit.description}
        category={hit.category}
    />
)

export default Hit