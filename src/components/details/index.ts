import type { ComponentType } from 'react'
import type { Project } from '../../types'
import CozyMarketDetail from './CozyMarketDetail'
import SunnysideAcresDetail from './SunnysideAcresDetail'
import StarkmineDetail from './StarkmineDetail'
import NLUExplorationDetail from './NLUExplorationDetail'

export const detailComponents: Record<string, ComponentType<{ project: Project; onClose: () => void }>> = {
    'cozy-market': CozyMarketDetail,
    'sunnyside-acres': SunnysideAcresDetail,
    'starkmine': StarkmineDetail,
    'nlu-exploration': NLUExplorationDetail,
}
