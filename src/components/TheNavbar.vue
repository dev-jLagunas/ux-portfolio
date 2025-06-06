<script setup>
import nameLogo from '@/assets/images/name_logo_sm.png'
import userSvg from '@/assets/svgs/nav-user.svg'
import workSvg from '@/assets/svgs/nav-design-works.svg'
import personalSvg from '@/assets/svgs/nav-artwork.svg'
</script>

<template>
  <nav class="hidden font-headings px-2 md:flex md:mt-4 md:gap-8">
    <div class="flex items-center mr-8">
      <img :src="nameLogo" alt="designer logo" class="h-20" />
      <div class="flex items-start gap-1 text-2xl ml-2 lg:text-3xl">
        <p><span class="text-pink font-bold">J</span>uan</p>
        <p><span class="text-blue font-bold">L</span>agunas</p>
      </div>
    </div>
    <ul class="flex-row-center w-full">
      <li class="nav-list-styles hover:cursor-pointer">
        <img :src="workSvg" alt="Monitor design svg" class="h-7" />
        <p>Work</p>
      </li>
      <li class="nav-list-styles hover:cursor-pointer">
        <img :src="userSvg" alt="user shaped svg" class="h-7" />
        <p>About</p>
      </li>
      <li class="nav-list-styles hover:cursor-pointer">
        <img :src="personalSvg" alt="Mona lisa svg" class="h-7" />
        <p>Personal</p>
      </li>
      <div class="flex flex-col gap-2 items-center lg:flex-row">
        <li>
          <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
            Contact
          </button>
        </li>
        <li>
          <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
            Lights Off
          </button>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped></style>
