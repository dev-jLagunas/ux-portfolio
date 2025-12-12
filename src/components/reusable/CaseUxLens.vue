<script setup>
// Props
defineProps({
  intro: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section id="ux-timeline-section">
    <div class="section-header-wrapper">
      <h3 class="font-bold text-3xl">Quick Process Overview</h3>
      <p class="text-blue/90 font-semibold md:pr-4 tracking-wider">Full Framework</p>
    </div>

    <article>
      <p class="mt-2">
        {{ intro }}
      </p>

      <section>
        <div class="container px-4 py-8 mx-auto">
          <div class="grid gap-4 md:grid-cols-12">
            <div class="col-span-12 md:col-span-3">
              <div class="ux-header-wrapper">
                <h3 class="text-3xl font-semibold">Design Framework</h3>
                <span class="text-sm tracking-wide">
                  {{ subheading }}
                </span>
              </div>
            </div>

            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div class="ux-slot-wrapper">
                <!-- Slot Content Begings -->
                <slot />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>

<style scoped></style>
