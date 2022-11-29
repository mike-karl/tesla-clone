import React from 'react'

type Props = {
    src: string,
    srcSetSMP: string,
    srcSetMD: string,
    srcSetMDP: string,
    alt: string,
    onLoad?: React.ReactEventHandler<HTMLImageElement>,
}

const SectionImage = (props: Props) => {
  return (
    <picture>
        <source
        srcSet={props.srcSetSMP}
        media="(max-width: 599px)"
        />
        <source
        srcSet={props.srcSetMD}
        media="(min-width: 600px)"
        />
        <source
        srcSet={props.srcSetMDP}
        media="(min-width: 600px) and (orientation:portrait)"
        />
        <img
        className="background-image"
        src={props.src}
        srcSet={props.src}
        alt={props.alt}
        height={"100%"}
        loading="eager"
        onLoad={props.onLoad}
        />
  </picture>
  )
}

export default SectionImage