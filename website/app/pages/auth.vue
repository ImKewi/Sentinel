<template>
    <div class="p-4">
        Logging in...
    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

onMounted(() => {
    const key = route.query.key

    if (!key) {
        if (route.query.redirect_url) {
            localStorage.setItem("redirect_url", route.query.redirect_url as string)
        }
        const callbackUrl = window.location.origin + "/auth"
        const authUrl = useRuntimeConfig().public.authUrl
        if (authUrl) {
            window.location.href = authUrl + "?callback_url=" + callbackUrl
        } else {
            throw createError({
                statusCode: 500,
                statusMessage: "Missing AUTH_URL in environment variables"
            })
        }
        return
    }

    localStorage.setItem("key", key)

    const redirect = localStorage.getItem("redirect_url") || "/"
    localStorage.removeItem("redirect_url")

    router.push(redirect)
})
</script>