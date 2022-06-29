<template>
    <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 w-full">
            <RouterLink class="text-lg inline-block p-[8px]" to="/">luckysetiawan.github.io</RouterLink>
            <nav class="flex space-x-12 items-center m2">
                <RouterLink class="inline-block p-[8px]" to="/">Home </RouterLink>
                <RouterLink class="inline-block p-[8px]" to="/about">About</RouterLink>
                <RouterLink class="inline-block p-[8px]" to="/contact">Contact</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'NavBar'
}
</script>