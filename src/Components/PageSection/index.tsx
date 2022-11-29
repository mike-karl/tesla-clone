import React from 'react'
import SectionImage from './SectionImage'

type Props = {
    ref: React.Ref<HTMLDivElement>,
    children: React.ReactNode,

}

const PageSection = React.forwardRef<HTMLDivElement, Props>( ({children}, ref) => {
  return (
    <section ref={ref} className="page-section" dir="ltr">
    <div className="img-container">

      {children}

    </div>
  </section>
  )
})

export default PageSection