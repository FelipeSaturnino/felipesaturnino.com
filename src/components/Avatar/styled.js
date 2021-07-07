import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.div`
    .gatsby-image-wrapper {
        border-radius: 50%;
        height: 5rem;
        margin: auto;
        width: 5rem;

        ${media.lessThan("large")`
        height: 1.875rem;
        width: 1.875rem;
    `}
}
`