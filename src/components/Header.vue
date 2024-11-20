<template>
    <header class="w-full fixed z-30 bg-white top-0">
        <div class=" flex pt-2">
            <img class="size-24 rounded-full " src="../assets/images/logo.webp">
            <nav class="w-full mx-auto my-5 justify-end">
                <ul class="flex justify-end space-x-8 px-3 py-2 font-medium hover:text-[#99a3a4] hover:font-bold hover:text-2xl">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li >
                        <RouterLink to="/services">Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
