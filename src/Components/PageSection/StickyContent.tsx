import React from 'react'
import { CgChevronDown } from 'react-icons/cg'

type Props = {
    dataLength: number,
    index: number,
    title: string,
    subTitle: React.ReactNode,
    btnLinks: React.ReactNode,
    entry: IntersectionObserverEntry | undefined,
    entryFooter?: IntersectionObserverEntry | undefined,
    pageDown?: React.MouseEventHandler<HTMLButtonElement>,
    isMounted?: boolean,
    hasTransitionedIn?: boolean,
}

const StickyContent = ({isMounted, dataLength, index, hasTransitionedIn, title, subTitle, btnLinks, pageDown, entry, entryFooter}: Props) => {
  return (
    <>
        { !(hasTransitionedIn === undefined) ? 
        <div
            className="sticky-container"
            id={index === 0 ? "start" : index === (dataLength - 1) ? "end" : undefined}
            style={{
            zIndex: `calc(${entry?.intersectionRatio }* 10)`,
            display: `${
                entry?.intersectionRatio && entry?.intersectionRatio < 0.1
                ? "none"
                : "flex"
            }`,
            }}
        >
            <div className="sticky">
            <article
                className="section-header"
                style={{
                opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`,
                display: `${
                    entry?.intersectionRatio && entry?.intersectionRatio > 0.1
                    ? "flex"
                    : "none"
                }`,
                }}
            >
                <h2 className={`${hasTransitionedIn && "in"} ${isMounted && "visible"}`}>
                {title}
                </h2>
                <p className={`${hasTransitionedIn && "in"} ${isMounted && "visible"}`}>
                {subTitle}
                </p>
            </article>
            <div
                className="btn-container"
                style={{
                opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`,
                display: `${
                    entry?.intersectionRatio && entry?.intersectionRatio > 0.1
                    ? "flex"
                    : "none"
                }`,
                }}
            >
                {btnLinks}
            </div>
                { !(pageDown === undefined) && <div className="chevron-down-container">
                <button
                    className={`pointer-on-hover`}
                    onClick={pageDown}
                    style={{
                    opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`,
                    display: `${
                        entry?.intersectionRatio &&
                        entry?.intersectionRatio > 0.1
                        ? "flex"
                        : "none"
                    }`,
                    }}
                >
                    <CgChevronDown className={`chevron-down bounce chevron-down-btn ${hasTransitionedIn && "in"} ${isMounted && "visible"}`} />
                </button>
            </div>}
            </div>
        </div>
        : 
        hasTransitionedIn === undefined ? 
        <div
        className="sticky-container"
        id={index === 0 ? "start" : index === 6 ? "end" : ""}
        style={{
            zIndex: `calc(${entry?.intersectionRatio }* 10)`,
            display: `${
            entry?.intersectionRatio && entry?.intersectionRatio < 0.1
                ? "none"
                : "flex"
            }`,
        }}
        >
        <div className="sticky" >
            <article
            className="section-header"
            style={{
                opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`,
                display: `${
                entry?.intersectionRatio && entry?.intersectionRatio > 0.1
                    ? "flex"
                    : "none"
                }`,
            }}
            >
            <h2 className='in visible'>
                {title}
            </h2>
            <p className='in visible'>
                {subTitle}
            </p>
            </article>
            <div
            className="btn-container"
            style={{
                opacity: `${ entryFooter?.isIntersecting ? "1" :`calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`}`,
                display: `${
                entry?.intersectionRatio && entry?.intersectionRatio > 0.1
                    ? "flex"
                    : "none"
                }`,
            }}
            >
            {btnLinks}
            </div>
            { pageDown && <div className="chevron-down-container">
            <button
                className={`pointer-on-hover`}
                onClick={pageDown}
                style={{
                opacity: `calc((2.5 * ${entry?.intersectionRatio}) - 1.5)`,
                display: `${
                    entry?.intersectionRatio &&
                    entry?.intersectionRatio > 0.1
                    ? "flex"
                    : "none"
                }`,
                }}
            >
                <CgChevronDown className="chevron-down bounce in visible" />
            </button>
            </div>}
        </div>
        </div>
        :
        null}
    </>
  )
}

export default StickyContent