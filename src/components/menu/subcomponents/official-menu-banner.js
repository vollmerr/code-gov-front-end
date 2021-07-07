import React from 'react'

export default function OfficialBanner ({bannerOptions}) {
  return (
    <div className="official-banner">
        <div className="banner-flag indented">
            <img src={bannerOptions.flag_icon} alt={bannerOptions.alt}/><span>{bannerOptions.title}</span>
        </div>
    </div>
  )
}