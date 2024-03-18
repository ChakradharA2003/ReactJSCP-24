// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="crypto-list">
      <div className="crypto-type-container">
        <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <div className="crypto-values-container">
        <p className="crypto-name">{usdValue}</p>
        <p className="crypto-name">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
