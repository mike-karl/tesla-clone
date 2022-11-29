import React from 'react'
import { CgChevronDown } from 'react-icons/cg'
import Footer from '../Footer'

type Props = {
    dataLength: number,
    index: number,
    title: string,
    subTitle: React.ReactNode,
    btnLinks: React.ReactNode,
    entry: IntersectionObserverEntry | undefined,
    pageDown?: React.MouseEventHandler<HTMLButtonElement>,
    animate?: boolean,
}

const StickyContent = ({dataLength, index, animate, title, subTitle, btnLinks, pageDown, entry}: Props) => {
  return (
    <>
        { !(animate === undefined ) ? 
        <div
            className="sticky-container"
            id={index === 0 ? "start" : index === 6 ? "end" : ""}
            style={{
            zIndex: `calc(((2.5 * ${entry?.intersectionRatio}) - 1.5))`,
            display: `${
                entry?.intersectionRatio && entry?.intersectionRatio < 0.1
                ? "none"
                : "flex"
            }`,
            }}
        >
            <div className="sticky" id="sticky-1">
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
                <h2 className={`${animate && "fade-up-animation"}`}>
                {title}
                </h2>
                <p className={`${animate && "fade-up-animation-2nd"}`}>
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
                    className={`pointer-on-hover ${
                    animate && "fade-down-animation"
                    }`}
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
                    <CgChevronDown className="chevron-down bounce" />
                </button>
            </div>}
            </div>
        </div>
        : 
        animate === undefined ? 
        <div
        className="sticky-container"
        id={index === 0 ? "start" : index === 6 ? "end" : ""}
        style={{
            zIndex: `calc(((2.5 * ${entry?.intersectionRatio}) - 1.5))`,
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
            <h2>
                {title}
            </h2>
            <p>
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
                <CgChevronDown className="chevron-down bounce" />
            </button>
            </div>}
            { (index === (dataLength - 1)) ?
            <Footer entry={entry}/> : null}
        </div>
        </div>
        :
        null}
    </>
  )
}

export default StickyContent