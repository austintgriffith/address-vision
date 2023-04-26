import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { AddressInput, Balance } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const [someAddress, setSomeAddress] = useState("");

  return (
    <>
      <Head>
        <title>Scaffold-ETH 2 App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>
      <div className="w-full"></div>
      <div className="flex w-full items-center flex-col flex-grow pt-10">
        <AddressInput
          placeholder="enter an ethereum address or ens name"
          value={someAddress}
          onChange={setSomeAddress}
        />
        <div className="p-8">{someAddress ? <Balance address={someAddress} /> : ""}</div>
        <div className="grid grid-cols-4 m-8 gap-4 ">
          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              //go to https://app.zerion.io/
              window.open("https://etherscan.io/address/" + someAddress + "", "_blank");
            }}
          >
            Etherscan
          </button>

          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              //go to https://app.zerion.io/
              window.open("https://app.zerion.io/" + someAddress + "/overview", "_blank");
            }}
          >
            Zerion
          </button>

          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              //go to https://app.zerion.io/
              window.open("https://zapper.xyz/account/" + someAddress + "", "_blank");
            }}
          >
            Zapper
          </button>
          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              //go to https://app.zerion.io/
              window.open("https://app.safe.global/transactions/queue?safe=eth:" + someAddress + "", "_blank");
            }}
          >
            Safe
          </button>
        </div>

        <div className="pt-8 flex flex-col">{someAddress ? <QRCode value={someAddress} /> : ""}</div>
      </div>
    </>
  );
};

export default Home;
