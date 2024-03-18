// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchCrypto()
  }

  fetchCrypto = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedResponse = data.map(crypto => ({
      id: crypto.id,
      currencyLogo: crypto.currency_logo,
      currencyName: crypto.currency_name,
      usdValue: crypto.usd_value,
      euroValue: crypto.euro_value,
    }))
    console.log(updatedResponse)
    this.setState({
      cryptoList: updatedResponse,
      isLoading: false,
    })
  }

  renderPageAfterFetch = () => {
    const {cryptoList} = this.state
    return (
      <div className="crypto-list-bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="crypto-list-container">
          <div className="list-headers-container">
            <h1 className="currency-value-heading">Coin Type</h1>
            <div className="currency-value-headers">
              <h1 className="currency-value-heading">USD</h1>
              <h1 className="currency-value-heading">EURO</h1>
            </div>
          </div>
          <ul className="fetched-list">
            {cryptoList.map(crypto => (
              <CryptocurrencyItem key={crypto.id} cryptoDetails={crypto} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    let fetch
    if (isLoading) {
      fetch = (
        <div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      )
    } else {
      fetch = this.renderPageAfterFetch()
    }
    return fetch
  }
}

export default CryptocurrenciesList
