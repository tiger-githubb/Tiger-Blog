<template>
  <div class="reset-password">
    <Modal 
        v-if="modalActive" 
        @close-modal="closeModal" 
        :modalMessage="modalMessage"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
        <form class="reset">
            <p class="login-register">
                Retour à 
                <router-link class="router-link" :to="{ name: 'Login' }">Entrée</router-link>
            </p>
            <h2>Réinitialiser le mot de passe</h2>
            <p>Vous avez oublié votre mot de passe?Entrez votre e-mail pour réinitialiser.</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </div>
            </div>
            <button @click.prevent="resetPassword">Réinitialiser</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add([faEnvelope]);

import Modal from '../components/Modal-comp.vue';
import Loading from '../components/Loading-comp.vue';

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: '',
            modalActive: false,
            modalMessage: '',
            loading: null
        }
    },
    components: { Modal, Loading },
    methods: {
        resetPassword() {
            this.loading = true;
            
            firebase
                .auth()
                .sendPasswordResetEmail(this.email)
                .then(() => {
                    this.modalMessage = 'Ако имате регистриран акаунт, ще получите поща.';
                    this.loading = false;
                    this.modalActive = true;
                })
                .catch((err) => {
                    this.modalMessage = err.message;
                    this.loading = false;
                    this.modalActive = true;
                });
        },
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.reset-password {
    position: relative;
    .form-wrap {
        .reset {
            h2 {
                margin-bottom: 8px;
            }
            p {
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
}
</style>