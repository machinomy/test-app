import * as React from 'react'
import './App.css'
import { default as vynos, BuyProcessEvent, WalletBuyArguments, ChannelMeta, VynosBuyResponse } from 'vynos'

const logo = require('./logo.svg')

class App extends React.Component {
  async componentDidMount () {
    await vynos.display()
  }

  render () {
      vynos.ready().then(wallet => {
        wallet.buyPromised('0xaa55976b1f7cdadf471b212415b9ba69b578227d', 100000000000000, 'http://127.0.0.1:3001/v1/accept', Date.now().toString())
            .on(BuyProcessEvent.SENT_PAYMENT, (args: WalletBuyArguments) => {
              console.log('PAYMENT WAS SENT!')
            }).on(BuyProcessEvent.RECEIVED_TOKEN, (args: WalletBuyArguments, token: string) => {
          console.log('Token is ' + token)
        }).on(BuyProcessEvent.OPENING_CHANNEL_FINISHED, (args: WalletBuyArguments, channel: ChannelMeta) => {
          console.log('Channel meta: ')
          console.log(channel)
        }).result.then((buyResponse: VynosBuyResponse) => {
          console.log(buyResponse)
        })
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          hello!
        </p>
      </div>
    );
  }
}

export default App;
