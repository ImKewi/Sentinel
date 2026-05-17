<template>
    <nav class="relative h-14 px-4 flex items-center bg-[#171717] text-white">
        <div class="flex items-center gap-2 z-10">
            <button @click="goTo('/')" class="flex items-center gap-2 hover:cursor-pointer hover:opacity-80 transition">
                <img src="/favicon.ico" alt="Logo" class="w-8 h-8 rounded-full">
                <span class="font-semibold">
                    Sentinel
                </span>
            </button>
            <div class="px-4" />
            <button @click="goTo('/docs')" class="p-2 hover:cursor-pointer hover:opacity-80 transition">
                Documentation
            </button>
            <button @click="goTo('/terms')" class="p-2 hover:cursor-pointer hover:opacity-80 transition">
                Terms of Service
            </button>
            <button @click="goTo('/privacy')" class="p-2 hover:cursor-pointer hover:opacity-80 transition">
                Privacy Policy
            </button>
        </div>
        <div class="flex items-center justify-end gap-4 ml-auto z-10">
            <button v-if="!isAuthed" @click="goTo('/login')" class="px-4 py-2">
                Login
            </button>
            <div v-else>
                <button @click="goTo('/guilds')" class="px-4 py-2">
                    My Guilds
                </button>
                <button @click="logout" class="px-4 py-2 bg-red-600 hover:bg-red-500 transition rounded">
                    Logout
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const router = useRouter()
const goTo = (path: string) => router.push(path)

import { onMounted, ref } from "vue"
const isAuthed = ref(false)

onMounted(() => {
    isAuthed.value = !!localStorage.getItem("key")
})

const logout = () => {
    localStorage.removeItem("key")
    isAuthed.value = false
    router.push("/")
}
</script>