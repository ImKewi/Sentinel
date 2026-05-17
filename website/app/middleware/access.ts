export default defineNuxtRouteMiddleware((to, from) => {
    const hasAccess = true

    if (!hasAccess) {
        throw createError({
            statusCode: 403,
            statusMessage: "You do not have permission to access this page"
        })
    }
})