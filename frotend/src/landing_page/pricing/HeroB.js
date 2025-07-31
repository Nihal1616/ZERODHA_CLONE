import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row mt-5 p-5 border-bottom text-center ">
        <h1>Charges</h1>
        <p className="text-muted fs-4 mt-3">List of all charges and taxes</p>
      </div>
      <div className="row p-5 text-center">
        <div className="col-4 p-5">
          <img src="media/pricing0.svg" />
          <h1 className=" fs-3 mt-3">Free equity delivery</h1>
          <p className="text-muted fs-6 mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/other-trades.svg" />
          <h1 className=" fs-3 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-6 mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5 text-center">
          <img src="media/pricing0.svg" />
          <h1 className=" fs-3 mt-3">Free direct MF</h1>
          <p className="text-muted fs-6 mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row">
        <h1>Charges explained</h1>
        <div className="col-6 p-5 mt-3">
          <h1 className="fs-5">Securities/Commodities transaction tax</h1>
          <p className="text-muted fs-8">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h1 className="fs-5">Transaction/Turnover Charges</h1>
          <p className="text-muted fs-8">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h1 className="fs-5">Account with debit balance</h1>
          <p className="text-muted fs-8">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <h1 className="fs-5">Margin Trading Facility (MTF)</h1>
          <p className="text-muted fs-8">
            <ul>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-6 p-5 mt-3">
          <h1 className="fs-5">GST</h1>
          <p className="text-muted fs-8">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h1 className="fs-5">SEBI Charges</h1>
          <p className="text-muted fs-8">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h1 className="fs-5">DP (Depository participant) charges</h1>
          <p className="text-muted fs-8">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
            <br />
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
            <br />
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h1 className="fs-5">Pledging charges</h1>
          <p className="text-muted fs-8">
            ₹30 + GST per pledge request per ISIN.
          </p>

          <h1 className="fs-5">AMC (Account maintenance charges)</h1>
          <p className="text-muted fs-8">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA
            <br />
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,
          </p>

          <h1 className="fs-5">Corporate action order charges</h1>
          <p className="text-muted fs-8">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
