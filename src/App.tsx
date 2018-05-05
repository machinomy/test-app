import * as React from 'react';
import './App.css';
import vynos from 'vynos'
import * as Web3 from 'web3'

const logo = require('./logo.svg');
class App extends React.Component {

    async componentDidMount () {
        await vynos.display()
        vynos.ready().then(wallet => {
            let web3 = new Web3(wallet.provider)
            web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    throw err
                } else {
                    let account = accounts[0]
                    console.log(account)
                }
            })
        })
    }

    render () {
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
