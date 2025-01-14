import { useStorage } from '@vueuse/core';
import { DONA_TURI_ENUM, YURISH_NAVBATI_ENUM } from './services/enum';
import { ODDIY_OQ_DONA, STANDART_MAYDON_DONALARINI_TERISH } from './services/default';
import type { DONA_MADELI } from './services/donalar';


export const TANLANGAN_DONA = useStorage<DONA_MADELI | null>('TANLANGAN_DONA', () => null);
export const YURISH_NAVBATI = useStorage<YURISH_NAVBATI_ENUM | DONA_TURI_ENUM>('YURISH_NAVBATI', () => YURISH_NAVBATI_ENUM.OQ)
export const SHAHMAT_DONALARI_STORE = useStorage('SHAHMAT_DONALARI_STORE', () => STANDART_MAYDON_DONALARINI_TERISH())