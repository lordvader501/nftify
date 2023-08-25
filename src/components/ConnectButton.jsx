import { ConnectButton } from "@rainbow-me/rainbowkit";
export const ButtonConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={{
                      borderRadius: "20px",
                      background:
                        "linear-gradient(131deg, #7C0F35 0%, #581266 100%)",
                      outline: "none",
                      padding: "15px",
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      color: "#FFF",
                      font: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      border: "0",
                      cursor: "pointer",
                    }}
                  >
                    Connect
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(131deg, #7C0F35 0%, #581266 100%)",
                      outline: "none",
                      padding: "10px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      color: "#FFF",
                      font: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      border: "0",
                      cursor: "pointer",
                    }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(131deg, #7C0F35 0%, #581266 100%)",
                      outline: "none",
                      padding: "10px",
                      paddingLeft: "20px",
                      paddingRight: "10px",
                      color: "#FFF",
                      font: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      border: "0",
                      cursor: "pointer",
                    }}
                  >
                    {account.displayBalance ? `${account.displayBalance}` : ""}
                    <div
                      style={{
                        borderRadius: "5px",
                        marginLeft: "3px",
                        border: "2px solid purple",
                        display: "flex",
                        padding: "5px",
                        alignItems: "center",
                        background: "#0000001A",
                      }}
                    >
                      <div
                        style={{
                          background: "#960252",
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        🤶
                      </div>
                      {account.displayName}
                    </div>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ButtonConnect;
