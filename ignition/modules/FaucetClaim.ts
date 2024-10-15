import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FaucetClaim = buildModule("ClaimFaucet", (m) => {
  const faucetClaim = m.contract("ClaimFaucet", ["DLTToken", "DLT"]);

  return { faucetClaim };
});

export default FaucetClaim;
