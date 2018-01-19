new Vue({
  el: '#body',
  data: {
    // wanted2Spend: 200,
    wantedEur: 1,
    eurbtc: 0.00010500,
    eureth: 0.00111954,
    ethbtc: 0.09384000,
    etheur: 893.22,
    btceur: 9527.84,
    btceth: 10.65643649,
    trxeth: 0.00004800,
    trxbtc: 0.00000455,
  },
  computed: {
    wantedBTC () {
      return this.eurbtc * this.wantedEur
    },

    wantedETH () {
      return this.eureth * this.wantedEur
    },

    highest () {
      let highest = 0
      for ( cur in this.allData ) {
        if ( this.allData[cur].TRX > highest )
          highest = this.allData[cur].TRX
      }
      return highest
    },

    allData () {
      return [
        this.EurBtcTrx,
        this.EurEthTrx,
        this.EurBtcEth,
        this.TrxBtcEth
      ]
    },

    // 1
    EurBtcTrx () {
      return {
        EUR: this.wantedEur,
        BTC: this.wantedBTC,
        TRX: this.wantedBTC / this.trxbtc,
        ALG: "EurBtcTrx"
      }
    },
    // 2
    EurEthTrx() {
      return {
        EUR: this.wantedEur,
        ETH: this.wantedETH,
        TRX: this.wantedETH / this.trxeth,
        ALG: "EurEthTrx"
      }
    },
    // 3
    EurBtcEth() {
      let eth = this.wantedBTC * this.btceth
      return {
        EUR: this.wantedEur,
        BTC: this.wantedBTC,
        ETH: eth,
        TRX: eth / this.trxeth,
        ALG: "EurBtcEthTrx"
      }
    },
    // 4
    TrxBtcEth() {
      let eth = this.wantedBTC * this.btceth
      return {
        TRX: this.wantedEur,
        BTC: this.wantedBTC,
        ETH: eth,
        TR2: eth / this.trxeth,
        ALG: "TrxBtcEthTrx"
      }
    }
  }
})
