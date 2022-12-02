import React from 'react'

type Props = {
    ref: React.Ref<HTMLDivElement>,
    children: React.ReactNode,
    height: number,
}

const PageSection = React.forwardRef<HTMLDivElement, Props>( ({children, height}, ref) => {
  return (
    <section ref={ref} className="page-section" style={{height}} dir="ltr">
    <div className="img-container" style={{height}} >

      {children}

    </div>
  </section>
  )
})

export default PageSection