import { DONA_ORNI_ENUM, DONA_TURI_ENUM, MAYDON_TURI_ENUM } from "./enum";

export interface DONA_MADELI {
    id: number | null,
    turi: DONA_TURI_ENUM,
    orni: DONA_ORNI_ENUM,
    maydon_turi: MAYDON_TURI_ENUM
}