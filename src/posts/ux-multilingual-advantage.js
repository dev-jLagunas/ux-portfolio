import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'
import coverImg from '@/assets/images/blogPosts/post8/blog-8-cover-img.png'

export default {
  id: 3,
  title: 'Why Multilingual UX Is a Real Design Advantage',
  slug: 'why-multilingual-ux-is-a-real-design-advantage',
  date: '2026-02-03',

  summary:
    'Speaking multiple languages is not just a personal detail. It directly shapes how I think about clarity, ambiguity, trust, and cognitive load in UX. This post explains why multilingual and linguistics-informed designers bring a different kind of value to product work.',

  content: `
    <p class="blog-paragraphs">I speak four languages and studied linguistics. That is not just a personal detail. It directly shapes how I design.</p>

    <p class="mb-2">A lot of UX conversations treat language as copy and localization as a checkbox. My experience has been the opposite. Language affects trust, identity, cognitive load, and how users interpret intent. If you miss that, you miss real UX.</p>

    <p class="mb-2"><strong>Language is not just words.</strong> It is part of a person’s identity. It signals who a product is for, who it respects, and who it expects to use it. Research in sociolinguistics consistently treats language as a core part of social identity and group belonging.</p>

    <p class="mb-2">In product terms, supporting a user’s native language does more than improve comprehension. It reduces distance. It builds trust. Even when a user can get by in a second language, seeing their language supported sends a strong signal of inclusion and care.</p>

    <p class="mb-2"><strong>Non-native language use increases baseline cognitive load.</strong> When users interact in a second language, the interface is not starting from zero. Research shows that reading and processing in a non-native language is slower and more effortful, requiring more working memory and attention.</p>

    <p class="mb-2">That has direct UX consequences. Ambiguous labels cost more. Dense paragraphs cost more. Clever phrasing costs more. If the language is harder, the design has to do more of the work. Clarity becomes a conversion factor, not a nice-to-have.</p>

    <p class="mb-2"><strong>Multilingualism trains you to respect ambiguity.</strong> When you speak multiple languages, you live inside uncertainty. You constantly see how the same idea changes meaning depending on phrasing, formality, and cultural context.</p>

    <p class="mb-2">That experience naturally pushes you toward simpler language, clearer hierarchy, and fewer assumptions about what users infer. You become more sensitive to how small wording choices change interpretation. That mindset maps directly to UX.</p>

    <p class="mb-2"><strong>Living and working in Japan forced me to drop the idea of universal “good UX.”</strong> Japanese UX often lives at two extremes. On one end, you see deep minimalism. On the other, you see dense interfaces designed to build trust by showing everything upfront.</p>

    <p class="mb-2">The best examples are not empty. They are structured. They rely on grouping, color coding, and controlled disclosure so users can scan without feeling overwhelmed. Cross-cultural UX research supports this idea that trust signals and design expectations vary meaningfully by country.</p>

    <p class="mb-2"><strong>Multilingual experience strengthens context switching.</strong> Research around bilingualism and cognitive control is nuanced, but there is evidence that language switching overlaps with broader task-switching and executive control systems.</p>

    <p class="mb-2">From a UX perspective, this shows up as an ability to shift perspectives quickly, spot hidden assumptions early, and anticipate where misunderstanding is likely. That is especially valuable when designing for international or multilingual users.</p>

    <p class="mb-2"><strong>The practical takeaway is simple.</strong> Multilingual UX is not about translating strings. It is about reducing cognitive load, designing clarity that survives ambiguity, and building trust in context.</p>

    <p class="mb-2">That is why I treat multilingualism as a design skill, not a background detail. I design with the assumption that misunderstanding is normal. My job is to remove it.</p>

    <hr class="my-6" />

    <p class="mb-2"><strong>References</strong></p>

    <ul class="list-disc ml-6">
      <li>Cambridge University Press. <em>Language and Identity in Sociolinguistics</em>. Language as a core component of social identity and belonging.</li>
      <li>National Institutes of Health (PMC). Research on second-language processing and increased cognitive load during L2 reading.</li>
      <li>ScienceDirect. Studies on bilingual language control and its overlap with executive and task-switching systems.</li>
      <li>ResearchGate. Cross-cultural research on website design, trust, and cultural differences in UX expectations.</li>
    </ul>
  `,

  tags: ['multilingual-ux', 'linguistics', 'international-ux', 'reflection'],
  category: 'Reflection',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'UX Designer with a background in linguistics and international product design',
    website: 'https://yourportfolio.com',
  },
  coverImage: coverImg,
  thumbnail: coverImg,
  readingTime: '4 min read',
  published: true,
  updated: '2026-02-03',

  relatedPosts: ['living-in-japan-changed-my-ux-thinking', 'designing-bilingual-interfaces'],
  showToc: false,
}
