import { Contract, GlobalState, } from '@algorandfoundation/algorand-typescript'

export class OnChainWill extends Contract {
  owner = GlobalState<string>({ key: "owner", initialValue: "owner_name" })
  beneficiary = GlobalState<string>({ key: "beneficiary", initialValue: "none" })
  asset = GlobalState<string>({ key: "asset", initialValue: "none" })

  setBeneficiary(name: string): string {
    this.beneficiary.value = name
    return "beneficiary set to " + name
  }

  setAsset(assetName: string): string {
    this.asset.value = assetName
    return "asset set to " + assetName
  }

  inherit(): string {
    return this.beneficiary.value + " inherits " + this.asset.value
  }
}