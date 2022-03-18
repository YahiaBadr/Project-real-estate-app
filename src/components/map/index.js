import React from 'react'
import { PropertyListingsConsumer, PropertyListingsProvider } from '../../contexts/PropertyListingsProvider'
import Filter from '../filter'
import Listing from '../listing'

function Map() {
    return (
      
    <div>
      <React.Fragment>
        <div className="container">
          <PropertyListingsProvider>
        <PropertyListingsConsumer>
    {function(value) {
      const { propertyListings, allListings, updateFilter } = value
      return (
        <React.Fragment>
          <Filter
            updateFilter={updateFilter}
            citys={allListings
              .map(listing => listing.city.split(' ')[0])
              .filter((item, i, arr) => arr.indexOf(item) === i)}
          />
          <div className="columns">
            {propertyListings.map(listing => (
              listing.booked && <Listing listing={listing} key={listing.address} />
            ))}
          </div>
        </React.Fragment>
      )
    }}
  </PropertyListingsConsumer>
  </PropertyListingsProvider>

      
        </div>
      </React.Fragment>
  </div>
    )
  }

export default Map