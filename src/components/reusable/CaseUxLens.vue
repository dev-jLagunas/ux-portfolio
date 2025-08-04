<script setup>
// Props
const props = defineProps({
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
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">From a UX lens</h3>
      <p class="text-blue font-semibold md:pr-4 tracking-wider">Full Framework</p>
    </div>

    <article>
      <p class="mt-2">
        {{ intro }}
      </p>

      <section>
        <div class="container px-4 py-8 mx-auto">
          <div class="grid gap-4 md:grid-cols-12">
            <div class="col-span-12 md:col-span-3">
              <div
                class="text-center sm:text-left mb-4 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-pink"
              >
                <h3 class="text-3xl font-semibold">Design Framework</h3>
                <span class="text-sm font-bold tracking-wider text-gray-500">
                  {{ subheading }}
                </span>
              </div>
            </div>

            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div
                class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"
              >
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
