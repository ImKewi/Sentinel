<script>
definePageMeta({
    middleware: ["auth", "access"]
})
</script>

<template>
    <div class="h-screen flex flex-col gap-4">
        <Navigation />
    
        <div class="flex items-center justify-between">
            <div class="pl-8 px-4">
                <link href="/guilds/{{ guildId }}" class="rounded-xl p-2 hover:opacity-80">
                    <div class="text-2xl font-semibold">{{ guildName }}</div>
                </link>
            </div>
            <div class="flex gap-2 px-4">
                <button @click="validateConfig" class="px-4 py-2 bg-gray-600 rounded hover:opacity-80">
                    Validate
                </button>
                <button @click="saveConfig" class="px-4 py-2 bg-[#5865F2] text-white rounded hover:opacity-80">
                    Save
                </button>
            </div>
        </div>

        <ClientOnly>
            <MonacoEditor
                v-model="config"
                :options="{
                    language: 'yaml',
                    theme: 'vs-dark'
                }"
                class="flex-1 rounded overflow-hidden"
            />
        </ClientOnly>
    </div>
</template>
  
<script setup>
import { ref } from "vue"

const config = ref(`prefix: "!"

modules:
  moderation:
    enabled: true
  utility:
    enabled: true
`)

const guildName = "No Idea How To Get This"

const saveConfig = () => {
    console.log("Config saved:", config.value)
}

const validateConfig = () => {
    console.log("Config validated:", config.value)
}
</script>