import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes/router";
import { RouterProvider } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora, ...[goerli]],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} theme={midnightTheme()}>
      <RouterProvider router={routes} />
    </RainbowKitProvider>
  </WagmiConfig>
);
