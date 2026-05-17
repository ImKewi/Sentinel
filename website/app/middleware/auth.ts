export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = true
  
    if (!isLoggedIn) {
        return navigateTo("/auth?redirect_url=" + to.fullPath)
    }
})