import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              <option className="option" value="NEW_DELHI">
                New Delhi
              </option>
              <option className="option" value="LONDON">
                London
              </option>
              <option className="option" value="PARIS">
                Paris
              </option>
              <option className="option" value="KATHMANDU">
                Kathmandu
              </option>
              <option className="option" value="HELSINKI">
                Helsinki
              </option>
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
