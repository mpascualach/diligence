import { ThirdwebProvider } from "@thirdweb-dev/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[rainbowWallet(), metamaskWallet()]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
