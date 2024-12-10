import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal3"
          >
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3ImgAlt: 'Personalized Email Insights Image Alt Text',
  feature2Title: 'Time-Saving Automation',
  feature1Title: 'Smart Email Organization',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1657818681067-f6847a4a593d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg0NjU4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Personalized Email Insights',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1524638067-feba7e8ed70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg0NjU4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Automate repetitive email tasks and responses, saving valuable time for more critical business activities.',
  feature1ImgAlt: 'Smart Email Organization Image Alt Text',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzg0NjU4OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Gain valuable insights into email usage patterns and productivity metrics to optimize workflow efficiency.',
  feature1Description:
    'LORA intelligently categorizes and prioritizes emails, ensuring that important messages are never missed.',
  feature2ImgAlt: 'Time-Saving Automation Image Alt Text',
}

Features2.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Features2
