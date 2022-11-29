import React from 'react'

type Props = {
  href: string | undefined,
  children: React.ReactNode,
}

const Link = ({href, children}: Props) => {
  return (
    <a className="pointer-on-hover underline-animation" href={href}>
      {children}
    </a>
  )
}

export default Link