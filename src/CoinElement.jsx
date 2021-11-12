import s from './CoinElement.module.css'




const CoinElement = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <div className={s.coinElem}>
            <div className={s.coinBlock}>
                <div className={s.coin}>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className={s.symbol}>{symbol}</p>
                </div>
                <div className={s.coinData}>
                    <p className={s.price}>${price}</p>
                    <p className={s.volume}>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className={s.redPercent}>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className={s.greenPercent}>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className={s.marketcap}>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default CoinElement