import { defineStore } from "pinia"
import {ref} from 'vue';

export const useRegistryStore = defineStore('Registry', () => {
    const name = ref('');
    const email = ref('');
    const saveRegistry = (formName, formEmail) => {
        name.value = formName;
        email.value = formEmail;
    }
    return {name,email,saveRegistry}
});
