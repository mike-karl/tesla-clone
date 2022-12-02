import { MouseEvent, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './App.css'
import Dialog from './Components/Dialog'
import PageSection from './Components/PageSection'
import SectionImage from './Components/PageSection/SectionImage'
import StickyContent from './Components/PageSection/StickyContent'
import SubTitleLink from './Components/PageSection/SubTitleLink'
import Navbar from './Components/Navbar'
import Drawer from './Components/Drawer'
import BtnLink from './Components/PageSection/BtnLink'
import Footer from './Components/Footer'
import useTransitionIn from './hooks/useTransitionIn'

type PageSectionData = {
  ref: React.Ref<HTMLDivElement>,
  src: string,
  srcSetSMP: string,
  srcSetMD: string,
  srcSetMDP: string, 
  alt: string,
  onLoad?: React.ReactEventHandler<HTMLImageElement>,
  title: string,
  subTitle: React.ReactNode,
  btnLinks: React.ReactNode,
  entry: IntersectionObserverEntry | undefined,
  entryFooter?: IntersectionObserverEntry | undefined,
  hasTransitionedIn?: boolean,
  isMounted?: boolean,
  pageDown?: React.MouseEventHandler<HTMLButtonElement>,
  height: number,
}

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [dialog, setDialog] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const [isMounted, setIsMounted] = useState<boolean>(true)

  const breakpoints = {
    small: 600,
    med: 1200,
  };

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
  const [footerRef , inViewFooter, entryFooter ] = useInView({
    threshold: threshold,
  })

  const hasTransitionedIn = useTransitionIn(isMounted, 3000)

  useEffect(() => {
    let isDialog = window.sessionStorage.getItem("testDialog")
    if (isDialog === null) {
      isDialog = "true";
    } else {
      isDialog = "false"
    }
    sessionStorage.setItem("testDialog", isDialog)
    isDialog === "true" && setDialog(true)
    
  }, []) 

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [])

  const onLoad = () => {
    setLoaded(true);
  }

  const onResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
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
    if (showMore) {
      let delay = setTimeout(() => {
        setShowMore( !showMore );
      }, 500)
    }
  }

  const toggleMore = () => {
    setShowMore(!showMore);
  }

  const pageSectionData: PageSectionData[] = [
    {
      ref: ref,
      src: "/tesla-model-3.jpg",
      srcSetSMP: "/tesla-model-3-smp.jpg",
      srcSetMD: "/tesla-model-3-md.jpg",
      srcSetMDP: "/tesla-model-3-mdp.jpg",
      alt: "Tesla model 3 on road with mountain background",
      onLoad: onLoad,
      title: "Model 3",
      subTitle: <SubTitleLink href="">Schedule a Test Drive</SubTitleLink>,
      btnLinks: (
        <>
          <BtnLink
            btnType={"primary"}
            className={`${hasTransitionedIn && "in"} ${isMounted && "visible"}`}
            href={""}
            children={"Custom Order"}
          />
          <BtnLink
            btnType={"secondary"}
            className={`${hasTransitionedIn && "in"} ${isMounted && "visible"}`}
            href={""}
            children={"Existing Inventory"}
          />
        </>
      ),
      entry: entry,
      hasTransitionedIn: hasTransitionedIn,
      isMounted: isMounted,
      pageDown: pageDown,
      height: height,
    },
    {
      ref: ref1,
      src: "/tesla-model-y.jpg",
      srcSetSMP: "/tesla-model-y-smp.jpg",
      srcSetMD: "/tesla-model-y-md.jpg",
      srcSetMDP: "/tesla-model-y-mdp.jpg",
      alt: "Tesla model y on road with mountain background",
      title: "Model Y",
      subTitle: <SubTitleLink href="">Schedule a Test Drive</SubTitleLink>,
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Custom Order"} />
          <BtnLink
            btnType={"secondary"}
            href={""}
            children={"Existing Inventory"}
          />
        </>
      ),
      entry: entry1,
      height: height,
    },
    {
      ref: ref2,
      src: "/tesla-model-s.jpg",
      srcSetSMP: "/tesla-model-s-smp.jpg",
      srcSetMD: "/tesla-model-s-md.jpg",
      srcSetMDP: "/tesla-model-s-mdp.jpg",
      alt: "Tesla model s on road with mountain background",
      title: "Model S",
      subTitle: <SubTitleLink href="">Schedule a Test Drive</SubTitleLink>,
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Custom Order"} />
          <BtnLink
            btnType={"secondary"}
            href={""}
            children={"Existing Inventory"}
          />
        </>
      ),
      entry: entry2,
      height: height,
    },
    {
      ref: ref3,
      src: "/tesla-model-x.jpg",
      srcSetSMP: "/tesla-model-x-smp.jpg",
      srcSetMD: "/tesla-model-x-md.jpg",
      srcSetMDP: "/tesla-model-x-mdp.jpg",
      alt: "Tesla model x on road with mountain background",
      title: "Model X",
      subTitle: <SubTitleLink href="">Schedule a Test Drive</SubTitleLink>,
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Custom Order"} />
          <BtnLink
            btnType={"secondary"}
            href={""}
            children={"Existing Inventory"}
          />
        </>
      ),
      entry: entry3,
      height: height,
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
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Order Now"} />
          <BtnLink btnType={"secondary"} href={""} children={"Learn More"} />
        </>
      ),
      entry: entry4,
      height: height,
    },
    {
      ref: ref5,
      src: "/tesla-solar-roof.jpg",
      srcSetSMP: "/tesla-solar-roof-smp.jpg",
      srcSetMD: "/tesla-solar-roof-md.jpg",
      srcSetMDP: "/tesla-solar-roof-mdp.jpg",
      alt: "Tesla solar roof on home",
      title: "Solar Roof",
      subTitle: "Produce Clean Energy From You Roof",
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Order Now"} />
          <BtnLink btnType={"secondary"} href={""} children={"Learn More"} />
        </>
      ),
      entry: entry5,
      height: height,
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
      btnLinks: (
        <>
          <BtnLink btnType={"primary"} href={""} children={"Shop Now"} />
        </>
      ),
      entry: entry6,
      entryFooter: entryFooter,
      height: height,
    },
  ];

let dataLength = pageSectionData.length;

  return (
    <div className="App" style={{visibility: `${!loaded ? "hidden" : "visible"}`}}>
      <span onClick={toggleDrawer}
        className={`glass-overlay ${isOpen ? "glass-fadeIn" : "glass-fadeOut"}`}
      ></span>
      <Drawer 
      isOpen={isOpen} 
      drawerRef={drawerRef} 
      showMore={showMore} 
      toggleMore={toggleMore} 
      toggleDrawer={toggleDrawer} 
      width={width}
      breakpoints={breakpoints}
      />
      <div className="content-container" style={{height}}>
        <Navbar 
        sliderRef={sliderRef} 
        handleMouseOver={handleMouseOver} 
        handleMouseLeave={handleMouseLeave} 
        toggleDrawer={toggleDrawer} 
        />
       
        <Dialog isOpen={dialog} toggleDialog={toggleDialog}>
          <h2>Notice: </h2>
          <p>
              This is not the official tesla website and is not affiliated with
              tesla in any way. This is a clone of the tesla.com homepage coded
              by Mike Karl as a project to showcase developer skills.
          </p>
        </Dialog>

        { pageSectionData.map((data, index) => 
            (
          <PageSection key={index} ref={data.ref} height={data.height}>
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
              btnLinks={data.btnLinks}
              entry={data.entry} 
              hasTransitionedIn={data.hasTransitionedIn}
              isMounted={data.isMounted}
              pageDown={data.pageDown} 
              entryFooter={data.entryFooter} 
              height={data.height}
              />
          </PageSection>
        ))}

        <Footer 
        ref={footerRef} 
        entry={entry6} 
        width={width} 
        breakpoints={breakpoints} 
        />
      </div>
    </div>
  );
}

export default App
