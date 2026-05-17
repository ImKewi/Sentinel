<script>
    definePageMeta({
        middleware: ["auth", "access"]
    })
</script>

<template>
    <div>
        <div>
            <h1>{{ guildName }}</h1>
            <p>{{ guildId }}</p>
        </div>

        <div>
            <button type="button" @click="goTo(`/guilds/${guildId}/config`)">
                Config
            </button>
            <button type="button" @click="goTo(`/guilds`)">
                Switch guild
            </button>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const guildId = route.params.guildId || ""
    const guildName = route.query.name || `${guildId}`

    const router = useRouter()
    const goTo = (path) => router.push(path)
</script>