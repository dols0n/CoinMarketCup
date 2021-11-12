import s from './App.module.css'
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getCoinsData} from "./redux/app-reducer";
import CoinElement from "./CoinElement";

function App(props) {

    const [search, setSearch] = useState('')

    useEffect(() => {
        props.getCoinsData()
    }, [])

    if(!props.coinsArray[0]){
        return null
    }

    const searchingCoin = (event) => {
        setSearch(event.target.value)
    }

    const searchedCoins = props.coinsArray.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

      return (
        <div className={s.app}>
          <div className={s.search}>
            <form>
                <h1 className={s.text}></h1>
              <input type='text' className={s.input} placeholder={'Search Coin'} onChange={searchingCoin}/>
            </form>
          </div>
          <div>
            {searchedCoins.map(coin => {
              return <CoinElement key={coin.id}
                                  name={coin.name}
                                  price={coin.current_price}
                                  symbol={coin.symbol}
                                  marketcap={coin.total_volume}
                                  volume={coin.market_cap}
                                  image={coin.image}
                                  priceChange={coin.price_change_percentage_24h}
              />
            })}
          </div>
        </div>
      )
}

let mapStateToProps = (state) => ({
    coinsArray: state.app.coinsArray
})

export default connect(mapStateToProps, {getCoinsData})(App)
