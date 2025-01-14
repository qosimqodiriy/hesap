<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { DONA_MADELI } from '@/services/donalar';
import { SHAHMAT_DONALARI_STORE, TANLANGAN_DONA, YURISH_NAVBATI } from '@/store';
import { BOSH_MAYDON, QIROL_QORA_DONA, STANDART_MAYDON_DONALARINI_TERISH } from '@/services/default';
import { DONA_TURI_ENUM, DONA_ORNI_ENUM, YURISH_NAVBATI_ENUM, MAYDON_TURI_ENUM } from "@/services/enum";



function reset() {
  SHAHMAT_DONALARI_STORE.value = [];
  YURISH_NAVBATI.value = YURISH_NAVBATI_ENUM.OQ;
  SHAHMAT_DONALARI_STORE.value = STANDART_MAYDON_DONALARINI_TERISH()
}


function style_berish(item: DONA_MADELI) {
  let stil = [];  


  if (item.turi !== DONA_TURI_ENUM.BOSH_MAYDON) {
    if (YURISH_NAVBATI.value === item.turi) {
      stil.push('cursor-pointer')
    } else {
      // return
      // stil.push('pointer-events-none')
    }
  }



  if(YURISH_NAVBATI.value === item.turi) {
    if(item.id === TANLANGAN_DONA?.value?.id) {
      if (item.maydon_turi === MAYDON_TURI_ENUM.YURILAYOTGAN_MAYDON) {
        stil.push('!bg-green-500')
    
      } else if (item.maydon_turi === MAYDON_TURI_ENUM.OLINADIGAN_MAYDON) {
        stil.push('!bg-red-500')
    
      } else if (item.maydon_turi === MAYDON_TURI_ENUM.YURILADIGAN_MAYDON) {
        stil.push('!bg-green-300')
      }
    }
  }


  return stil.join(' ');
}

function yurish_navbatini_almashtirish() {
  if (YURISH_NAVBATI.value === YURISH_NAVBATI_ENUM.OQ) {
    YURISH_NAVBATI.value = YURISH_NAVBATI_ENUM.QORA
  } else YURISH_NAVBATI.value = YURISH_NAVBATI_ENUM.OQ
}



function olinadigan_donalarni_belgilash(y: number, x: number, dona: DONA_MADELI) {
  const olinadiganDonalar: DONA_MADELI[] = [];

  const directions = [
    { dy: -1, dx: -1 }, // Chap yuqoriga
    { dy: -1, dx: 1 },  // O'ng yuqoriga
    { dy: 1, dx: -1 },  // Chap pastga
    { dy: 1, dx: 1 },   // O'ng pastga
  ];

  // Har bir yo'nalishni ko'rib chiqamiz
  directions.forEach(({ dy, dx }) => {
    let newY = y + dy;
    let newX = x + dx;
    let donaTopildi = false;

    while (
      newY >= 0 &&
      newY < SHAHMAT_DONALARI_STORE.value.length &&
      newX >= 0 &&
      newX < SHAHMAT_DONALARI_STORE.value[0].length
    ) {
      const target = SHAHMAT_DONALARI_STORE.value[newY][newX];

      if (target.turi === DONA_TURI_ENUM.BOSH_MAYDON) {
        // Agar oldin qarama-qarshi dona topilgan bo'lsa, bu maydon olinadigan dona joyi bo'ladi
        if (donaTopildi) {
          target.maydon_turi = MAYDON_TURI_ENUM.YURILADIGAN_MAYDON;
        } else {
          target.maydon_turi = MAYDON_TURI_ENUM.YURILADIGAN_MAYDON;
        }
      } else if (target.turi !== dona.turi) {
        // Qarama-qarshi dona topildi
        if (donaTopildi) break; // Agar oldin boshqa dona topilgan bo'lsa, o'yin tugaydi
        donaTopildi = true;
      } else {
        // O'z donamizga to'qnash kelgan bo'lsa, o'yin tugaydi
        break;
      }

      newY += dy;
      newX += dx;
    }
  });

  console.log("Olinadigan donalar:", olinadiganDonalar);
}



function boshish(y: number, x: number, dona: DONA_MADELI) {


  if(dona.id === TANLANGAN_DONA?.value?.id) {
    TANLANGAN_DONA.value = null; return;
  }

  // olinadigan_donalarni_belgilash(y, x, dona);B

  TANLANGAN_DONA.value = null;

  SHAHMAT_DONALARI_STORE.value = SHAHMAT_DONALARI_STORE.value.map((qator, idx1) =>
    qator.map((ustun, idx2) => {
      ustun.maydon_turi = MAYDON_TURI_ENUM.ODATIY_MAYDON;


      // Bosilgan maydon
      if (idx1 === y && idx2 === x) {
        if(YURISH_NAVBATI.value === ustun.turi) {
          if(ustun.turi !== DONA_TURI_ENUM.BOSH_MAYDON) {
            TANLANGAN_DONA.value = ustun;
            ustun.maydon_turi = MAYDON_TURI_ENUM.YURILAYOTGAN_MAYDON;
          }
        }
      }

      return ustun;
    })
  );



  if (dona.turi !== DONA_TURI_ENUM.BOSH_MAYDON) {
    // Yuradigan dona
    if (YURISH_NAVBATI.value === dona.turi) {

      // Dona turini aniqlash => oddiy | qirol

      // Bu oddiy dona
      if (dona.orni === DONA_ORNI_ENUM.ODDIY) {
        console.log("Bu oddiy dona");

      }

      // Bu qirol dona
      else {
        console.log("Bu qirol dona");

      }
    }
  } else {
    console.log("Bosh maydon bosildi");
  }


  // yurish_navbatini_almashtirish()
}
</script>

<template>
  <p class="fixed top-6 left-10 text-lg">Yurish navbati: {{ YURISH_NAVBATI }}</p>

  <div class="main_page relative">

    <div class="doska">
      <div class="qator" v-for="(qator, idx) in SHAHMAT_DONALARI_STORE" :key="idx">
        <div class="maydon" v-for="(ustun, idx2) in qator" :key="idx2" :berilgan_qiymat="JSON.stringify(ustun)" :class="[style_berish(ustun)]" @click="boshish(idx, idx2, ustun)">

          <!-- <p>{{ ustun.id }}</p> -->
          <img v-if="ustun.turi == DONA_TURI_ENUM.OQ && ustun.orni === DONA_ORNI_ENUM.ODDIY" src="../assets/images/OQ_DONA.png" alt="">
          <img v-else-if="ustun.turi == DONA_TURI_ENUM.OQ && ustun.orni === DONA_ORNI_ENUM.QIROL" src="../assets/images/QIROL_OQ_DONA.png" alt="">

          <img v-if="ustun.turi == DONA_TURI_ENUM.QORA && ustun.orni === DONA_ORNI_ENUM.ODDIY" src="../assets/images/QORA_DONA.png" alt="">
          <img v-else-if="ustun.turi == DONA_TURI_ENUM.QORA && ustun.orni === DONA_ORNI_ENUM.QIROL" src="../assets/images/QIROL_QORA_DONA.png" alt="">

        </div>
      </div>
    </div>


    <div @click="reset" class="w-16 h-16 rounded-full border flex items-center justify-center bg-red-400 absolute top-10 right-10"></div>

    <div class="absolute top-16 left-10">
      <p class="font-medium text-lg">Tanlangan dona</p>

      <p>id: {{ TANLANGAN_DONA?.id }}</p>
      <p>turi: {{ TANLANGAN_DONA?.turi }}</p>
      <p>orni: {{ TANLANGAN_DONA?.orni }}</p>
    </div>
  </div>
</template>