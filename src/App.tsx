import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { VscGlobe, VscClose } from 'react-icons/vsc'
import {CgChevronRight, CgChevronLeft, CgChevronDown} from 'react-icons/cg'
import './App.css'
import Dialog from './Components/Dialog'
import PageSection from './Components/PageSection'
import SectionImage from './Components/PageSection/SectionImage'
import StickyContent from './Components/PageSection/StickyContent'
import SubTitleLink from './Components/PageSection/SubTitleLink'
import Navbar from './Components/Navbar'

type PageSectionData = {
  ref: React.Ref<HTMLDivElement>,
  src: string,
  srcSetSMP: string,
  srcSetMD: string,
  srcSetMDP: string, 
  alt: string,
  onLoad?: React.ReactEventHandler<HTMLImageElement>
  title: string,
  subTitle: React.ReactNode,
  entry: IntersectionObserverEntry | undefined 
  animate?: boolean
  pageDown?: React.MouseEventHandler<HTMLButtonElement>
}

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(true)
  const [dialog, setDialog] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const drawerRef = useRef<HTMLDivElement>(null)

  const sliderRef = useRef<HTMLDivElement>(null)

  const threshold = [ 
    0, .01, .02, .03, .04, .05, .06, .07, .08, .09, .1, .11, .12, .13, .14, .15, .16, .17, .18, .19, .2, .21, .22, .23, .24, .25, .26, .27, .28, .29, .3, .31, .32, .33, .34, .35, .36, .37, .38, .39, .4, .41, .42, .43, .44, .45, .46, .47, .48, .49, .5, .51, .52, .53, .54, .55, .56, .57, .58, .59, .6, .61, .62, .63, .64, .65, .66, .67, .68, .69, .7, .71, .72, .73, .74, .75, .76, .77, .78, .79, .8, .81, .82, .83, .84, .85, .86, .87, .88, .89, .9, .91, .92, .93, .94, .95, .96, .97, .98, .99, 1 
  ]
  
  const [ref , inView, entry ] = useInView({
    threshold: threshold
  })

  const [ref1 , inView1, entry1 ] = useInView({
    threshold:threshold,
  })

  const [ref2 , inView2, entry2 ] = useInView({
    threshold:threshold,
  })

  const [ref3 , inView3, entry3 ] = useInView({
    threshold:threshold,
  })

  const [ref4 , inView4, entry4 ] = useInView({
    threshold:threshold,
  })
  const [ref5 , inView5, entry5 ] = useInView({
    threshold:threshold,
  })
  const [ref6 , inView6, entry6 ] = useInView({
    threshold:threshold,
  })

  useEffect(() => {
    let isDialog = window.sessionStorage.getItem("testDialog")
    console.log("isDialog: " + isDialog)
    if (isDialog === null) {
      isDialog = "true";
    } else {
      isDialog = "false"
    }
    sessionStorage.setItem("testDialog", isDialog)
    isDialog === "true" && setDialog(true)
    
  }, []) 

  useEffect(() => {
    window.addEventListener("mousedown", clickOut);
  })

  const disableAnimation = () => {
      if (!entry?.intersectionRatio) return;
      if (entry?.intersectionRatio < 0.1) {
        setAnimate(false);
      } else {
        return;
      }
    }

  useEffect(() => {
    console.log(entry?.intersectionRatio)
    console.log(animate)
    disableAnimation();
  }), [disableAnimation]

  const onLoad = () => {
    setLoaded(true);
  }
  
  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (sliderRef.current) {
    sliderRef.current.style.top = target?.offsetTop+"px";
    sliderRef.current.style.left = target?.offsetLeft+"px";
    sliderRef.current.style.width = target?.offsetWidth+"px";
    sliderRef.current.style.height = target?.offsetHeight+"px";
    sliderRef.current.style.opacity = "1";
    sliderRef.current.style.display = "block";
    }
  }

  const handleMouseLeave = () => {
    if (!sliderRef.current) {
      return
    }
      sliderRef.current.style.opacity = "0"
    
    let delay: number
     delay = setTimeout(() => {
      if (sliderRef?.current?.style.opacity === "0"){
        sliderRef.current.style.display = "none"
        console.log('render');
      }
    }, 300)
    return () => clearTimeout(delay);
    }
  

  const pageDown = () => {
    entry1?.target.scrollIntoView({ behavior: "smooth"})
  }

  const toggleDialog = () => {
    setDialog( !dialog );
  }

  const toggleDrawer = () => {
    setIsOpen( !isOpen );
  }

  const toggleMore = () => {
    setShowMore(!showMore);
  }

  const clickOut = (e: any) => {
    if (!drawerRef.current) {
      return
    }
    if (!drawerRef?.current.contains(e?.target) && isOpen ) {
      toggleDrawer();
    }
  }

  const pageSectionData: PageSectionData[] = [{
    ref: ref,
    src: "/tesla-model-3.jpg",
    srcSetSMP: "/tesla-model-3-smp.jpg",
    srcSetMD: "/tesla-model-3-md.jpg",
    srcSetMDP: "/tesla-model-3-mdp.jpg", 
    alt: "Tesla model 3 on road with mountain background",
    onLoad: onLoad,
    title: "Model 3",
    subTitle: <SubTitleLink href=''>Schedule a Test Drive</SubTitleLink>,
    entry: entry, 
    animate: animate,
    pageDown: pageDown,
  },
  {
    ref: ref1,
    src: "/tesla-model-y.jpg",
    srcSetSMP: "/tesla-model-y-smp.jpg",
    srcSetMD: "/tesla-model-y-md.jpg",
    srcSetMDP: "/tesla-model-y-mdp.jpg", 
    alt: "Tesla model y on road with mountain background",
    title: "Model Y",
    subTitle: <SubTitleLink href=''>Schedule a Test Drive</SubTitleLink>,
    entry: entry1, 
  },
  {
    ref: ref2,
    src: "/tesla-model-s.jpg",
    srcSetSMP: "/tesla-model-s-smp.jpg",
    srcSetMD: "/tesla-model-s-md.jpg",
    srcSetMDP: "/tesla-model-s-mdp.jpg", 
    alt: "Tesla model s on road with mountain background",
    title: "Model S",
    subTitle: <SubTitleLink href=''>Schedule a Test Drive</SubTitleLink>,
    entry: entry2, 
  },
  {
    ref: ref3,
    src: "/tesla-model-x.jpg",
    srcSetSMP: "/tesla-model-x-smp.jpg",
    srcSetMD: "/tesla-model-x-md.jpg",
    srcSetMDP: "/tesla-model-x-mdp.jpg", 
    alt: "Tesla model x on road with mountain background",
    title: "Model X",
    subTitle: <SubTitleLink href=''>Schedule a Test Drive</SubTitleLink>,
    entry: entry3, 
  },
  {
    ref: ref4,
    src: "/tesla-solar-panels.jpg",
    srcSetSMP: "/tesla-solar-panels-smp.jpg",
    srcSetMD: "/tesla-solar-panels-md.jpg",
    srcSetMDP: "/tesla-solar-panels-mdp.jpg", 
    alt: "Tesla solar panels on roof of home",
    title: "Solar Panels",
    subTitle: "Lowest Cost Solar Panels in America",
    entry: entry4, 
  }
  , 
  {
    ref: ref5,
    src: "/tesla-solar-roof.jpg",
    srcSetSMP: "/tesla-solar-roof-smp.jpg",
    srcSetMD: "/tesla-solar-roof-md.jpg",
    srcSetMDP: "/tesla-solar-roof-mdp.jpg", 
    alt: "Tesla solar roof on home",
    title: "Solar Roof",
    subTitle: "Produce Clean Energy From You Roof",
    entry: entry5, 
  },
  {
    ref: ref6,
    src: "/tesla-accessories.jpg",
    srcSetSMP: "/tesla-accessories-smp.jpg",
    srcSetMD: "/tesla-accessories-md.jpg",
    srcSetMDP: "/tesla-accessories-mdp.jpg", 
    alt: "tesla accessory",
    title: "Accessories",
    subTitle: "",
    entry: entry6, 
  },
]

let dataLength = pageSectionData.length;

  return (
    <div className="App" style={{visibility: `${!loaded ? "hidden" : "visible"}`}}>
      <span
        className={`glass-overlay ${isOpen ? "glass-fadeIn" : "glass-fadeOut"}`}
      ></span>
      <div
        className={`drawer ${!isOpen ? "drawer-closed" : "drawer-opened"}`}
        ref={drawerRef}
      >
        <span className={`x-icon-container ${showMore && "spaced-between"}`}>
          {showMore && (
            <button className="drawer-btn" id="back-btn" onClick={toggleMore}>
              <CgChevronLeft className="chevron" />
              <span id="back-btn-text">Back</span>
            </button>
          )}
          <button onClick={() => toggleDrawer()}>
            <VscClose className="x-icon" />
          </button>
        </span>
        <nav className="drawer-nav">
          <ul className="list-container">
            <li className="drawer-item">
              <a title="Existing Inventory" className="list-item-link" href="">
                Existing Inventory
              </a>
            </li>
            <li className="drawer-item">
              <a title="Used Inventory" className="list-item-link" href="">
                Used Inventory
              </a>
            </li>
            <li className="drawer-item">
              <a title="Trade-In" className="list-item-link" href="">
                Trade-In
              </a>
            </li>
            <li className="drawer-item">
              <a title="Test Drive" className="list-item-link" href="">
                Test Drive
              </a>
            </li>
            <li className="drawer-item">
              <a title="Insurance" className="list-item-link" href="">
                Insurance
              </a>
            </li>
            <li className="drawer-item">
              <a title="Cyberruck" className="list-item-link" href="">
                Cybertruck
              </a>
            </li>
            <li className="drawer-item">
              <a title="Roadster" className="list-item-link" href="">
                Roadster
              </a>
            </li>
            <li className="drawer-item">
              <a title="Semi" className="list-item-link" href="">
                Semi
              </a>
            </li>
            <li className="drawer-item">
              <a title="Charging" className="list-item-link" href="">
                Charging
              </a>
            </li>
            <li className="drawer-item">
              <a title="Powerwall" className="list-item-link" href="">
                Powerwall
              </a>
            </li>
            <li className="drawer-item">
              <a title="Commercial Energy" className="list-item-link" href="">
                Commercial Energy
              </a>
            </li>
            <li className="drawer-item">
              <a title="Utilities" className="list-item-link" href="">
                Utilities
              </a>
            </li>
            <li className="drawer-item">
              <a title="Find Us" className="list-item-link" href="">
                Find Us
              </a>
            </li>
            <li className="drawer-item">
              <a title="Support" className="list-item-link" href="">
                Support
              </a>
            </li>
            <li className="drawer-item">
              <a title="Investor Relations" className="list-item-link" href="">
                Investor Relations
              </a>
            </li>
            <li className="drawer-item">
              <a title="Language" className="list-item-link" href="">
                <VscGlobe className="globe-icon" />{" "}
                <span className="select-origin">
                  <h3 className="list-item-heading">United States</h3>
                  <p className="current-language">English</p>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        {showMore ? (
          <nav className="mobile-drawer-nav">
            <ul className="list-container">
              <li className="drawer-item">
                <a title="Cyberruck" className="list-item-link" href="">
                  Cybertruck
                </a>
              </li>
              <li className="drawer-item">
                <a title="Roadster" className="list-item-link" href="">
                  Roadster
                </a>
              </li>
              <li className="drawer-item">
                <a title="Semi" className="list-item-link" href="">
                  Semi
                </a>
              </li>
              <li className="drawer-item">
                <a title="News" className="list-item-link" href="">
                  News
                </a>
              </li>
              <li className="drawer-item">
                <a title="Language" className="list-item-link" href="">
                  <VscGlobe className="globe-icon" />{" "}
                  <span className="select-origin">
                    <h3 className="list-item-heading">United States</h3>
                    <p className="current-language">English</p>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="mobile-drawer-nav">
            <ul className="list-container">
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Model S
                </a>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Model 3
                </a>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Model X
                </a>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Model Y
                </a>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Solar Roof
                </a>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  Solar Panels
                </a>
              </li>
              <li className="drawer-item">
                <a
                  title="Existing Inventory"
                  className="list-item-link"
                  href=""
                >
                  Existing Inventory
                </a>
              </li>
              <li className="drawer-item">
                <a title="Used Inventory" className="list-item-link" href="">
                  Used Inventory
                </a>
              </li>
              <li className="drawer-item">
                <a title="Trade-In" className="list-item-link" href="">
                  Trade-In
                </a>
              </li>
              <li className="drawer-item">
                <a title="Test Drive" className="list-item-link" href="">
                  Test Drive
                </a>
              </li>
              <li className="drawer-item">
                <a title="Insurance" className="list-item-link" href="">
                  Insurance
                </a>
              </li>
              <li className="drawer-item">
                <a title="Cyberruck" className="list-item-link" href="">
                  Cybertruck
                </a>
              </li>
              <li className="drawer-item">
                <a title="Roadster" className="list-item-link" href="">
                  Roadster
                </a>
              </li>
              <li className="drawer-item">
                <a title="Semi" className="list-item-link" href="">
                  Semi
                </a>
              </li>
              <li className="drawer-item">
                <a title="Charging" className="list-item-link" href="">
                  Charging
                </a>
              </li>
              <li className="drawer-item">
                <a title="Powerwall" className="list-item-link" href="">
                  Powerwall
                </a>
              </li>
              <li className="drawer-item">
                <a title="Commercial Energy" className="list-item-link" href="">
                  Commercial Energy
                </a>
              </li>
              <li className="drawer-item">
                <a title="Utilities" className="list-item-link" href="">
                  Utilities
                </a>
              </li>
              <li className="drawer-item">
                <a title="Find Us" className="list-item-link" href="">
                  Find Us
                </a>
              </li>
              <li className="drawer-item">
                <a title="Support" className="list-item-link" href="">
                  Support
                </a>
              </li>
              <li className="drawer-item">
                <a
                  title="Investor Relations"
                  className="list-item-link"
                  href=""
                >
                  Investor Relations
                </a>
              </li>
              <li className="drawer-item">
                <a title="Shop" className="list-item-link" href="">
                  Shop
                </a>
              </li>
              <li className="drawer-item">
                <a title="Account" className="list-item-link" href="">
                  Account
                </a>
              </li>
              <li className="drawer-item">
                <button
                  className="drawer-btn spaced-between"
                  onClick={toggleMore}
                >
                  <span>More</span>
                  <CgChevronRight className="chevron" />
                </button>
              </li>
              <li className="drawer-item">
                <a className="list-item-link" href="">
                  <VscGlobe className="globe-icon" />{" "}
                  <span className="select-origin">
                    <h3 className="list-item-heading">United States</h3>
                    <p className="current-language">English</p>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="content-container">
        <Navbar handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} sliderRef={sliderRef} toggleDrawer={toggleDrawer} />
       
        <Dialog isOpen={dialog} toggleDialog={toggleDialog}>
          <h2>Notice: </h2>
          <p>
              This is not the official tesla website and is not affiliated with
              tesla in any way. This is a clone of the tesla.com homepage coded
              by Mike Karl as a project to showcase developer skills.
          </p>
        </Dialog>

        { 
          
          pageSectionData.map((data, index) => 
            (
          <PageSection key={index} ref={data.ref}>
            <SectionImage 
              src={data.src} 
              srcSetSMP={data.srcSetSMP}
              srcSetMD={data.srcSetMD} 
              srcSetMDP={data.srcSetMDP}
              alt={data.alt}
              onLoad={data.onLoad}
            />
            <StickyContent 
              dataLength={dataLength}
              index={index}
              title={data.title}
              subTitle={data.subTitle}
              entry={data.entry} 
              animate={data.animate} 
              pageDown={data.pageDown} />
          </PageSection>
        ))}
        
        {/* <section ref={ref1} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-model-y-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-model-y-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-model-y-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-model-y.jpg"
                alt="model-s background image"
                height={"100%"}
                loading="lazy"
              />
            </picture>
            <div
              className="sticky-container"
              style={{
                zIndex: `${entry1?.intersectionRatio}`,
                display: `${
                  entry1?.intersectionRatio && entry1?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-2">
                <article
                  className="section-header"
                  style={{
                    opacity: `calc((2.5 * ${entry1?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry1?.intersectionRatio &&
                      entry1?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Model Y</h2>
                  <p>
                    <a className="pointer-on-hover underline-animation" href="">
                      Schedule a Test Drive
                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry1?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry1?.intersectionRatio &&
                      entry1?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Custom Order" className="primary-btn-link" href="">
                    Custom Order
                  </a>
                  <a
                    title="Existing Inventory"
                    className="secondary-btn-link"
                    href=""
                  >
                    {" "}
                    Existing Inventory
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref2} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-model-s-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-model-s-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-model-s-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-model-s.jpg"
                alt="model-s background image"
                height={"100%"}
                loading="lazy"
              />
            </picture>
            <div
              className="sticky-container"
              style={{
                zIndex: `${entry2?.intersectionRatio}`,
                display: `${
                  entry2?.intersectionRatio && entry2?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-3">
                <article
                  className="section-header"
                  id="modely"
                  style={{
                    opacity: `calc((2.5 * ${entry2?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry2?.intersectionRatio &&
                      entry2?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Model S</h2>
                  <p>
                    <a className="pointer-on-hover underline-animation" href="">
                      Schedule a Test Drive
                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry2?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry2?.intersectionRatio &&
                      entry2?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Custom Order" className="primary-btn-link" href="">
                    Custom Order
                  </a>
                  <a
                    title="Existing Inventory"
                    className="secondary-btn-link"
                    href=""
                  >
                    {" "}
                    Existing Inventory
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref3} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-model-x-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-model-x-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-model-x-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-model-x.jpg"
                alt="model-s background image"
                height={"100%"}
                loading="lazy"
              />
            </picture>
            <div
              className="sticky-container"
              style={{
                zIndex: `${entry3?.intersectionRatio}`,
                display: `${
                  entry3?.intersectionRatio && entry3?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-4">
                <article
                  className="section-header"
                  style={{
                    opacity: `calc((2.5 * ${entry3?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry3?.intersectionRatio &&
                      entry3?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Model X</h2>
                  <p>
                    <a className="pointer-on-hover underline-animation" href="">
                      Schedule a Test Drive
                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry3?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry3?.intersectionRatio &&
                      entry3?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Custom Order" className="primary-btn-link" href="">
                    Custom Order
                  </a>
                  <a
                    title="Existing Inventory"
                    className="secondary-btn-link"
                    href=""
                  >
                    {" "}
                    Existing Inventory
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref4} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-solar-panels-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-solar-panels-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-solar-panels-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-solar-panels.jpg"
                alt="model-s background image"
                height={"100%"}
                loading="lazy"
              />
            </picture>
            <div
              className="sticky-container"
              style={{
                zIndex: `${entry4?.intersectionRatio}`,
                display: `${
                  entry4?.intersectionRatio && entry4?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-5">
                <article
                  className="section-header"
                  style={{
                    opacity: `calc((2.5 * ${entry4?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry4?.intersectionRatio &&
                      entry4?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Solar Panels</h2>
                  <p>
                    Lowest Cost Solar Panels in America
                    <a className="pointer-on-hover underline-animation" href="">

                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry4?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry4?.intersectionRatio &&
                      entry4?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Order Now" className="primary-btn-link" href="">
                    Order Now
                  </a>
                  <a title="Learn More" className="secondary-btn-link" href="">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref5} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-solar-roof-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-solar-roof-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-solar-roof-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-solar-roof.jpg"
                alt="model-s background image"
                height={"100%"}
                loading="lazy"
              />
            </picture>
            <div
              className="sticky-container"
              style={{
                zIndex: `${entry5?.intersectionRatio}`,
                display: `${
                  entry5?.intersectionRatio && entry5?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-6">
                <article
                  className="section-header"
                  style={{
                    opacity: `calc((2.5 * ${entry5?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry5?.intersectionRatio &&
                      entry5?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Solar Roof</h2>
                  <p>
                    Produce Clean Energy From Your Roof
                    <a className="pointer-on-hover underline-animation" href="">
                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry5?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry5?.intersectionRatio &&
                      entry5?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Order Now" className="primary-btn-link" href="">
                    Order Now
                  </a>
                  <a title="Learn More" className="secondary-btn-link" href="">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={ref6} className="page-section" dir="ltr">
          <div className="img-container">
            <picture>
              <source
                srcSet="/tesla-accessories-smp.jpg"
                media="(max-width: 599px)"
              />
              <source
                srcSet="/tesla-accessories-md.jpg"
                media="(min-width: 600px)"
              />
              <source
                srcSet="/tesla-accessories-mdp.jpg"
                media="(min-width: 600px) and (orientation:portrait)"
              />
              <img
                className="background-image"
                src="/tesla-accessories.jpg"
                alt="model-s background image"
                height={"100%"}
              />
            </picture>
            <div
              className="sticky-container"
              id="end"
              style={{
                zIndex: `${entry6?.intersectionRatio}`,
                display: `${
                  entry6?.intersectionRatio && entry6?.intersectionRatio < 0.1
                    ? "none"
                    : "flex"
                }`,
              }}
            >
              <div className="sticky" id="sticky-7">
                <article
                  className="section-header"
                  style={{
                    opacity: `calc((2.5 * ${entry6?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry6?.intersectionRatio &&
                      entry6?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <h2>Accessories</h2>
                  <p>
                    <a className="pointer-on-hover underline-animation" href="">
                      
                    </a>
                  </p>
                </article>
                <div
                  className="btn-container"
                  style={{
                    opacity: `calc((2.5 * ${entry6?.intersectionRatio}) - 1.5)`,
                    display: `${
                      entry6?.intersectionRatio &&
                      entry6?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                  }}
                >
                  <a title="Shop Now" className="primary-btn-link" href="">
                    Shop Now
                  </a>
                </div>
                <footer>
                    <nav>
                      <ul>
                        <li>
                          <a href="">
                            <span>Tesla</span>
                          </a>
                        </li>
                        <li>
                          <a href="">Privacy & Legal</a>
                        </li>
                        <li>
                          <a href="">Vehical Recalls</a>
                        </li>
                        <li>
                          <a href="">Contact</a>
                        </li>
                        <li>
                          <a href="">Careers</a>
                        </li>
                        <li>
                          <a href="">News</a>
                        </li>
                        <li>
                          <a href="">Engage</a>
                        </li>
                        <li>
                          <a href="">Location</a>
                        </li>
                      </ul>
                    </nav>
                  </footer>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default App
