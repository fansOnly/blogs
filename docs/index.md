---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Front World"
  text: "A Little Surprise"
  # tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Motto A
    details: Never stop learning
  - title: Motto B
    details: Learn by your hand instead of your eye
  - title: Motto C
    details: Learn from others and make it yours
  - title: Motto D
    details: Your code should be better
  - title: Motto E
    details: Fix bug is endless
  - title: Motto F
    details: Do not be hesitate when a thought come in, just try it
  - title: Motto G
    details: Write down you thoughts anywhere, anytime
  - title: Motto H
    details: Make sure if you are not sure
  - title: Motto I
    details: Be happy, focus and confidence when coding
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/26369080?v=4',
    name: 'FansOnly',
    title: 'I wont to write bugs',
    links: [
      { icon: 'github', link: 'https://github.com/fansOnly' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/26369080?v=4',
    name: 'Waiting',
    title: 'someone else',
    links: [
      { icon: 'github', link: '' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />