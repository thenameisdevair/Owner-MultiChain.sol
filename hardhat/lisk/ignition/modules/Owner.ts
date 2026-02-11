import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OwnerModule = buildModule("OwnerModule", (m) => {
  const owner = m.contract("Owner", []);

  return { owner };
});

export default OwnerModule;
