<script setup>
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.png'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.png'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.png'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.png'
</script>

<template>
  <section class="font-headings">
    <header class="px-4">
      <h1 class="font-bold text-3xl text-center md:text-5xl">My UX Work</h1>
      <p class="my-2 text-center">
        A selection of real-world project that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div class="px-4 flex flex-col gap-6 mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      <ProjectCard
        title="Cafe Triangle"
        ux-type="Web UX"
        description="Here will be a quick one sentence description for this case study."
        :image="cafeTrioPhoto"
      />
      <ProjectCard
        title="Notion Project Management System"
        ux-type="Systems UX"
        description="Here will be a quick one sentence description for this case study."
        :image="notionTrioPhoto"
      />
      <ProjectCard
        title="Department Marketing System"
        ux-type="Design Ops UX"
        description="Here will be a quick one sentence description for this case study."
        :image="marketingTrioPhoto"
      />
      <ProjectCard
        title="Email Newsletter Redesign"
        ux-type="Email UX"
        description="Here will be a quick one sentence description for this case study."
        :image="emailTrioPhoto"
      />
    </div>
  </section>
</template>

<style scoped></style>
