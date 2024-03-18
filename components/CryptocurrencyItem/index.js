// Write your JS code here
import './index.css'

const CryptocurrencyItem = (props) => {
    const {cryptoDetails} = props
    const {currencyLogo,currencyName,usdValue,euroValue} = cryptoDetails
    return(
        <li className="crypto-list">
            <div className="crypto-type-container">
                <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
                <h1 className="heading">{currencyName}</h1>
            </div>
        </li>
    )
}
export default CryptocurrencyItem
