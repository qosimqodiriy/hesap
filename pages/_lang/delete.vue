<template>
    <div style="width: 100vw; height: 100vh;">
        <div class="my_container">
            <div class="box">
                <div class="img_box">
                    <img src="../../assets/media/trash.png" alt="">
                </div>
                <p class="delete_title">Akkauntni o’chirish!</p>
                <p class="delete_text">Akkauntingizni o’chirish uchun avval telefon raqamingizni kiriting, so’ngra yuboriladigan kodni kiritish orqali jarayonni davom ettirasiz</p>


                <form class="form_data" @submit.prevent="submit">
                    <div v-if="stage != 3" class="label_item">
                        <label for="phone">Telefon raqamingiz</label>
                        <input v-model="formData.phone" :disabled="stage != 1 ? true : false" name="phone" id="phone" maxlength="13" required>
                        <p class="error_text">{{ errortext }}</p>
                    </div>

                    <div v-if="stage === 2" class="label_item">
                        <label for="code">Tasdiqlash kodi</label>
                        <input v-model="formData.confirm" type="text" name="code" id="code" maxlength="6" minlength="6" required>
                    </div>

                    <div v-if="stage === 3" class="label_item">
                        <label for="commit">O’chirish sababi</label>
                        <textarea v-model="formData.commit" name="commit" id="commit" rows="5"></textarea>
                    </div>

                    <div class="submit">
                        <button native-type="submit" :disabled="loading">
                            <img v-if="loading" class="loading" src="../../assets/media/loading.gif" alt="">
                            <p>Davom etish</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>


        <!-- Modal -->
        <div class="modal " v-if="visible">
            <div class="content" :class="visible ? 'blowUp' : ''">
                <div class="img_box">
                    <img src="../../assets/media/warning.png" alt="">
                </div>
                <p class="delete_title">Ishonchingiz komilmi?</p>
                <p class="delete_text">O’chirish tugmasini bosganingizdan so’ng akkauntingizdagi barcha ma’lumotlar vaqtinchalik o’chiriladi, ma’lum muddatdan so’ng esa ularga butunlay dostupni yo’qotasiz!</p>

                <div class="btn_box">
                    <button @click="Confirm()" class="btn_red">Ha akkauntimni o’chrish</button>
                    <button @click="Reject()" class="btn_close">Yo’q bekor qilish</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script scoped>
import delete_API from '@/api/delete'

export default {
    data: () => ({
        stage: 1,
        modalRef: '',
        errortext: '',
        visible: false,
        loading: false,
        formData: {
            id: '',
            phone: '',
            token: '',
            commit: '',
            status: '',
            confirm: '',
        }
    }),
    
    methods: {
        openModal() {
            // this.modalRef.open();
            this.visible = true;
        },

        submit() {
            // this.openModal();
            if(this.stage === 1) {
                this.Request();
            } else if(this.stage === 2) {
                this.Prepare();
            } else if(this.stage === 3) {
                this.visible = true;
            }
        },

        async Request() {
            this.loading = true;
            const response = await delete_API.Request_API(this.$axios, this.formData.phone.trim());
            this.loading = false;

            if(response.status === 200) {
                this.stage = 2;
                this.formData.id = response.data.id;
                this.formData.phone = response.data.phone;
                this.formData.token = response.data.token;
                this.formData.status = response.data.status;
            } else if(response.status === 400) {
                this.errortext = "Raqam noto'gri kiritilgan";
                setTimeout(() => { this.errortext = '' }, 3000);
            }
        },

        async Prepare() {
            this.loading = true;
            const response = await delete_API.Prepare_API(this.$axios, this.formData);
            this.loading = false;

            if(response.status === 200) {
                this.stage = 3;
                this.formData.token = response.data.token;
            } else if(response.status === 400) {
                this.errortext = "Kod noto'gri kiritilgan";
                setTimeout(() => { this.errortext = '' }, 3000);
            }
        },

        async Confirm() {
            this.loading = true;
            const response = await delete_API.Confirm_API(this.$axios, this.formData);
            this.loading = false;
            
            if(response.status === 200) {
                this.stage = 1;
                this.visible = false;
                this.$router.push('/')
                this.formData.id = ''
                this.formData.phone = ''
                this.formData.commit = ''
                this.formData.confirm = ''
            } else if(response.status === 400) {
                alert(response.message);
            }
        },

        async Reject() {
            this.loading = true;
            const response = await delete_API.Reject_API(this.$axios, this.formData.token);
            this.loading = false;

            if(response.status === 200) {
                this.stage = 1;
                this.visible = false;
                this.$router.push('/')
                this.formData.id = ''
                this.formData.phone = ''
                this.formData.commit = ''
                this.formData.confirm = ''
            } else if(response.status === 400) {
                alert(response.message);
            }
        },
    },
}
</script>


<style scoped>
.my_container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
}

.box {
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
}

.img_box {
    width: 64px;
    height: 64px;
    display: flex;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#FF4C4C, #FF0000);
}

.img_box > img {
    width: 32px;
    height: 32px;
}

.delete_title {
    color: #010E38;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Halvar-bold';
}

.delete_text {
    color: #010E38;
    text-align: center;
    margin-bottom: 30px;
}

.error_text {
    color: #FF0000;
}

.form_data {
    gap: 15px;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
}

.label_item {
    gap: 5px;
    display: flex;
    flex-direction: column;
}

.label_item > label {
    font-size: 12px;
    line-height: 16px;
    font-family: 'Hauora-regular';
}

.label_item input ,
.label_item textarea {
    padding: 15px;
    border: none;
    outline: none;
    border-radius: 15px;
    background: #EBF5FF;
}

.submit {
    display: flex;
    justify-content: center;
}

.submit > button {
    width: 100%;
    border: none;
    outline: none;
    color: white;
    max-width: 180px;
    font-weight: 700;
    padding: 15px 20px;
    border-radius: 15px;
    background: #0053DC;
    font-family: 'Hauora-bold';

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.submit > button img {
    width: 22px;
}




/* Modal */
.modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    overflow: auto;
    align-items: center;
    justify-content: center;

    z-index: 5;
    padding: 15px;
    backdrop-filter: blur(2px);
    background: rgba(1, 14, 56, 0.4);
}

.content {
    padding: 45px;
    max-width: 660px;
    border-radius: 20px;
    background-color: white;
}

.content.blowUp {
    animation: blowUp 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}


.btn_box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.btn_box button {
    outline: none;
    font-weight: 700;
    padding: 15px 20px;
    border-radius: 15px;
    font-family: 'Hauora-bold';
}

.btn_box .btn_red {
    color: white;
    background-color: #FF4C4C;
    border: 1px solid #FF4C4C;
}

.btn_box .btn_close {
    color: #0053DC;
    background-color: #fff;
    border: 1px solid #0053DC;
}





@keyframes blowUp {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}



@media (max-width: 767px) {
    .content {
        padding: 15px;
    }

    .btn_box button {
        width: 100%;
    }
}
</style>