<template>
    <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div class="text-lg">luckysetiawan.github.io</div>
            <nav class="flex space-x-12 items-center m2">
                <RouterLink to="/">
                    Home
                </RouterLink>
                <RouterLink to="/about">
                    About
                </RouterLink>
                <RouterLink to="/contact">
                    Contact
                </RouterLink>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'NavBar'
}
</script>