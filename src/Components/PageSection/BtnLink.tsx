import React from 'react'

type Props = {
    btnType: "primary" | "secondary",
    className?: string
    title?: string
    href: string,
    children: string
}

const BtnLink = ({btnType, className, title, href, children}: Props) => {
    if (title === null) {
        title = children
    }
  return (
    btnType === 'primary' ?
    <a
    title={title}
    className={`primary-btn-link ${className ? className : "in visible"}`}
    href={href}
>
    {children}
</a>
: btnType === 'secondary' ?
<a
    title={title}
    className={`secondary-btn-link ${className ? className : "in visible"}`}
    href={href}
>   
    {children}
</a>
: null
  )
}

export default BtnLink