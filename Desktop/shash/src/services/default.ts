import { YURISH_NAVBATI } from "@/store"
import type { DONA_MADELI } from "./donalar"
import { DONA_ORNI_ENUM, DONA_TURI_ENUM, MAYDON_TURI_ENUM, YURISH_NAVBATI_ENUM } from "./enum"


export function BOSH_MAYDON(id: number | null = null): DONA_MADELI {
    const object: DONA_MADELI = {
        id: id,
        turi: DONA_TURI_ENUM.BOSH_MAYDON,
        orni: DONA_ORNI_ENUM.ODDIY,
        maydon_turi: MAYDON_TURI_ENUM.ODATIY_MAYDON,
    }
  
    return object
}


// OQ DONALAR UCHUN

export function ODDIY_OQ_DONA(id: number | null = null): DONA_MADELI {
    const object: DONA_MADELI = {
        id: id,
        turi: DONA_TURI_ENUM.OQ,
        orni: DONA_ORNI_ENUM.ODDIY,
        maydon_turi: MAYDON_TURI_ENUM.ODATIY_MAYDON,
    }
  
    return object
}


export function QIROL_OQ_DONA(id: number | null = null): DONA_MADELI {
    const object: DONA_MADELI = {
        id: id,
        turi: DONA_TURI_ENUM.OQ,
        orni: DONA_ORNI_ENUM.QIROL,
        maydon_turi: MAYDON_TURI_ENUM.ODATIY_MAYDON,
    }
  
    return object
}






// QORA DONALAR UCHUN

export function ODDIY_QORA_DONA(id: number | null = null): DONA_MADELI {
    const object: DONA_MADELI = {
        id: id,
        turi: DONA_TURI_ENUM.QORA,
        orni: DONA_ORNI_ENUM.ODDIY,
        maydon_turi: MAYDON_TURI_ENUM.ODATIY_MAYDON,
    }
  
    return object
}


export function QIROL_QORA_DONA(id: number | null = null): DONA_MADELI {
    const object: DONA_MADELI = {
        id: id,
        turi: DONA_TURI_ENUM.QORA,
        orni: DONA_ORNI_ENUM.QIROL,
        maydon_turi: MAYDON_TURI_ENUM.ODATIY_MAYDON,
    }
  
    return object
}




// UMUMIY MAYDON

export function STANDART_MAYDON_DONALARINI_TERISH() {
    let count = 0;
    const matrix = [];

    for (let qator = 0; qator < 8; qator++) {
        const row = [];

        for (let ustun = 0; ustun < 8; ustun++) {
            count ++;

            if (qator >= 3 && qator <= 4) {
                row.push(BOSH_MAYDON(count));
            } else {
                if((qator + ustun) % 2 === 0) {
                    row.push(BOSH_MAYDON(count));
                } else {
                    if(qator < 4) {
                        if(qator + ustun % 2 == 0) {
                            row.push(BOSH_MAYDON(count));
                        } else row.push(ODDIY_QORA_DONA(count));
    
                    } else {
                        if(qator + ustun % 2 == 0) {
                            row.push(BOSH_MAYDON(count));
                        } else row.push(ODDIY_OQ_DONA(count));
                    }
                }

            }
        }

        matrix.push(row);
    }
    

    YURISH_NAVBATI.value = YURISH_NAVBATI_ENUM.OQ;


    return matrix;
}