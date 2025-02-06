import { ChainId } from '../../sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CARDONA]: '0x581BC61F43D6F9470D0a0291176A7344329cD551'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
