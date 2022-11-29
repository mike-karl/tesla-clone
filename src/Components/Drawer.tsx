import React, { MouseEventHandler } from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'
import { VscClose, VscGlobe } from 'react-icons/vsc'

type Props = {
    isOpen: boolean,
    drawerRef: React.Ref<HTMLDivElement>,
    showMore: boolean,
    toggleMore: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
    toggleDrawer: MouseEventHandler<HTMLButtonElement>,
}

const Drawer = ({isOpen, drawerRef, showMore, toggleMore, toggleDrawer}: Props) => {
  return (
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
          <button onClick={toggleDrawer}>
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
  )
}

export default Drawer