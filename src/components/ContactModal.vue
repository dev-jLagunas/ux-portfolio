<script setup>
import { showContactModal } from '@/composables/useContactModal'
import gsap from 'gsap'

// Images
import nameLogoDark from '@/assets/images/name_logo_sm.webp'

function closeModal() {
  showContactModal.value = false
}

// GSAP Transition Hooks
function onEnter(el, done) {
  const backdrop = el
  const modalBox = el.querySelector('.contact-form-wrapper')
  const title = el.querySelector('.contact-title-wrap')
  const elements = el.querySelectorAll('.form-stagger')

  const tl = gsap.timeline({ onComplete: done })

  // 1. Backdrop fade-in
  tl.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })

  // 2. Title drops in
  if (title) {
    tl.fromTo(
      title,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
      0.05,
    )
  }

  // 3. Modal card pops open with spring bounce
  tl.fromTo(
    modalBox,
    {
      scale: 0.82,
      opacity: 0,
      y: 20,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'back.out(1.6)',
    },
    0.1,
  )

  // 4. Staggered reveal of form inputs and elements
  if (elements.length) {
    tl.fromTo(
      elements,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: 'power2.out',
      },
      0.2,
    )
  }
}

function onLeave(el, done) {
  const backdrop = el
  const modalBox = el.querySelector('.contact-form-wrapper')

  const tl = gsap.timeline({ onComplete: done })

  tl.to(modalBox, {
    scale: 0.9,
    opacity: 0,
    y: 10,
    duration: 0.2,
    ease: 'power2.in',
  }).to(
    backdrop,
    {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    },
    0.05,
  )
}
</script>

<template>
  <Transition :css="false" @enter="onEnter" @leave="onLeave">
    <article
      v-if="showContactModal"
      class="contact-modal-container fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-dark/60 backdrop-blur-sm select-none"
      @click.self="closeModal"
    >
      <div class="contact-title-wrap">
        <h2 class="section-title text-light mb-4">Contact Me</h2>
      </div>

      <div
        class="contact-form-wrapper relative w-full max-w-lg bg-light rounded-2xl p-6 sm:p-8 shadow-2xl"
      >
        <button
          class="form-close-btn absolute top-4 right-4 text-copy/60 hover:text-dark hover:scale-110 transition-transform font-bold"
          @click="closeModal"
        >
          ✕
        </button>

        <img
          :src="nameLogoDark"
          alt="Name logo of Juan Lagunas"
          class="form-stagger h-16 mx-auto mb-2"
        />

        <p class="form-stagger px-2 leading-5 text-center text-dark">
          Have a project in mind? Want to collaborate? Want to say hello?
        </p>
        <p class="form-stagger px-2 leading-5 mt-1 mb-6 text-center text-dark">
          <strong>Send me a message!</strong> I’d be happy to talk.
        </p>

        <form
          action="https://formspree.io/f/xjkobrre"
          method="POST"
          class="form-wrapper flex flex-col gap-3"
        >
          <label for="name" class="hidden">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            class="form-stagger form-input"
            placeholder="Name"
          />

          <label for="email" class="hidden">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            class="form-stagger form-input"
            placeholder="Email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            aria-describedby="emailHelp"
            oninvalid="this.setCustomValidity('Please enter a valid email address.')"
            oninput="this.setCustomValidity('')"
          />

          <label for="message" class="hidden">Message</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
            required
            minlength="10"
            maxlength="2000"
            class="form-stagger w-full rounded-lg p-3 bg-blue/10 shadow-sm placeholder:text-dark/60 focus:outline-none focus:ring-2 focus:ring-pink/50 transition-all"
            aria-describedby="messageHelp"
            oninvalid="this.setCustomValidity('Please enter a message (at least 10 characters).')"
            oninput="this.setCustomValidity('')"
          ></textarea>

          <button type="submit" class="form-stagger form-send-btn mt-2">Send</button>
        </form>
      </div>
    </article>
  </Transition>
</template>

<style scoped>
.contact-form-wrapper {
  transform-origin: center center;
  will-change: transform, opacity;
}
</style>
