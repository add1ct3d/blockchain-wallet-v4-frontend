import { lift } from 'ramda'
import { RootState } from 'data/rootReducer'
import { selectors } from 'data'

export const getData = (state: RootState) => {
  const ratesR = selectors.components.borrow.getRates(state)
  const supportedCoinsR = selectors.core.walletOptions.getSupportedCoins(state)

  const transform = (rates, supportedCoins) => ({
    rates,
    supportedCoins
  })

  return lift(transform)(ratesR, supportedCoinsR)
}