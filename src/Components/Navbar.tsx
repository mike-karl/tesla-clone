import React, { MouseEventHandler } from 'react'

type Props = {
    handleMouseOver: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
    handleMouseLeave: MouseEventHandler<HTMLSpanElement>,
    sliderRef: React.Ref<HTMLDivElement>,
    toggleDrawer: MouseEventHandler<HTMLButtonElement>,
    width: number,
    breakpoints: {small: number, med: number},

}

const Navbar = (props: Props) => {
  const { small, med } = props.breakpoints
  return (
    <header>
          <span className="logo-container">
            <h1 className="logo-icon">
              <a href="">
                <svg
                  className="tesla-logo"
                  width="600"
                  viewBox="0 0 342 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </h1>
          </span>

          <span
            className={`header-navs nav-animation`}
            onMouseLeave={props.handleMouseLeave}
          > { props.width > med ?
            <>
            <div
              className="background-slider"
              ref={props.sliderRef}
              id="slider"
            ></div>
            <nav className="featured-product-nav">
              <a
                title="Model S"
                onMouseOver={props.handleMouseOver}
                id="model-s"
                href=""
              >
                Model S
              </a>
              <a
                title="Model 3"
                onMouseOver={props.handleMouseOver}
                id="model-3"
                href=""
              >
                Model 3
              </a>
              <a
                title="Model X"
                onMouseOver={props.handleMouseOver}
                id="model-x"
                href=""
              >
                Model X
              </a>
              <a
                title="Model Y"
                onMouseOver={props.handleMouseOver}
                id="model-y"
                href=""
              >
                Model Y
              </a>
              <a
                title="Solar Roof"
                onMouseOver={props.handleMouseOver}
                id="solar-roof"
                href=""
              >
                Solar Roof
              </a>
              <a
                title="Solar Panels"
                onMouseOver={props.handleMouseOver}
                id="solar-panels"
                href=""
              >
                Solar Panels
              </a>
            </nav>
            <nav className="main-nav">
              <a title="Shop" onMouseOver={props.handleMouseOver} id="shop" href="">
                Shop
              </a>
              <a
                title="Account"
                onMouseOver={props.handleMouseOver}
                id="account"
                href=""
              >
                Account
              </a>
              <button
                title="Menu"
                onMouseOver={props.handleMouseOver}
                id="menu"
                onClick={props.toggleDrawer}
              >
                Menu
              </button>
            </nav>
            </>
            :
            <>
            <nav className="main-nav">
              <button
                title="Menu"
                onMouseOver={props.handleMouseOver}
                id="menu"
                onClick={props.toggleDrawer}
              >
                Menu
              </button>
            </nav>
            </>
          }
          </span>
          
            
        </header>
  )
}

export default Navbar