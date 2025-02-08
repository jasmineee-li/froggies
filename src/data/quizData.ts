import { Question, Character, Result } from '../types/quiz';

export const characters: Character[] = [
  { name: 'Charlotte' },
  { name: 'Hannah' },
  { name: 'Matthew' },
  { name: 'Jin' },
  { name: 'Ankil' },
  { name: 'Katie' },
  { name: 'Chrisandra' },
  { name: 'Marcelo' },
  { name: 'Cat' },
  { name: 'Jasmine' },
];

export const questions: Question[] = [
  {
    id: 1,
    text: "The Journey Begins...",
    description: "You hop into the mystical Glowshroom Swamp, where fireflies hum ancient tales. Before you are four paths:",
    answers: [
      {
        emoji: "🧙",
        text: "A mossy trail leading to a crumbling stone tower",
        type: "🧙"
      },
      {
        emoji: "🎭",
        text: "A vibrant path lit by bioluminescent flowers",
        type: "🎭"
      },
      {
        emoji: "📜",
        text: "A quiet boardwalk through whispering reeds",
        type: "📜"
      },
      {
        emoji: "⚔️",
        text: "A straight, sturdy bridge over a bubbling moat",
        type: "⚔️"
      }
    ]
  },
  {
    id: 2,
    text: "A Creature Appears!",
    description: "A glowing Swamp Sprite blocks your path. It demands a 'toll' to pass. You...",
    answers: [
      {
        emoji: "🔍",
        text: "Observe its behaviour for weaknesses",
        type: "🧙"
      },
      {
        emoji: "🎤",
        text: "Tell it a thrilling story to distract it",
        type: "🎭"
      },
      {
        emoji: "💧",
        text: "Offer a tear-shaped dewdrop from a lotus",
        type: "📜"
      },
      {
        emoji: "⚡",
        text: "Challenge it to a duel of wits",
        type: "⚔️"
      }
    ]
  },
  {
    id: 3,
    text: "Storm Clouds Gather",
    description: "The swamp darkens as thunder rumbles. How do you seek shelter?",
    answers: [
      {
        emoji: "📚",
        text: "Find a cave and scribble predictions about the storm",
        type: "🧙"
      },
      {
        emoji: "🎪",
        text: "Rally other frogs with a song to lift spirits",
        type: "🎭"
      },
      {
        emoji: "🍃",
        text: "Sit under a giant leaf, writing haiku about rain",
        type: "📜"
      },
      {
        emoji: "🛡️",
        text: "Build a makeshift fortress from driftwood",
        type: "⚔️"
      }
    ]
  },
  {
    id: 4,
    text: "A Companion Joins You",
    description: "A chatty Toad Traveler asks to tag along. What do you ask them first?",
    answers: [
      {
        emoji: "🕵️",
        text: "What ancient mysteries does this swamp hide?",
        type: "🧙"
      },
      {
        emoji: "🎉",
        text: "Got any wild stories from your travels?",
        type: "🎭"
      },
      {
        emoji: "🌿",
        text: "Do you ever feel... too much?",
        type: "📜"
      },
      {
        emoji: "🗺️",
        text: "What's the quickest way out of here?",
        type: "⚔️"
      }
    ]
  },
  {
    id: 5,
    text: "The Treasure Revealed!",
    description: "You find a Golden Lilypad with a gift just for you. Which do you take?",
    answers: [
      {
        emoji: "🧪",
        text: "A vial of 'Bottomless Ink'",
        type: "🧙"
      },
      {
        emoji: "🤡",
        text: "A whoopee cushion that sounds like a dragon",
        type: "🎭"
      },
      {
        emoji: "✒️",
        text: "A quill that writes in your darkest voice",
        type: "📜"
      },
      {
        emoji: "🔥",
        text: "A sword named 'Plot Armor'",
        type: "⚔️"
      }
    ]
  },
  {
    id: 6,
    text: "Sunset at the Swamp's Edge",
    description: "The adventure ends. How do you unwind?",
    answers: [
      {
        emoji: "🌌",
        text: "Chart constellations and invent myths",
        type: "🧙"
      },
      {
        emoji: "🎶",
        text: "Host a bonfire with songs and tall tales",
        type: "🎭"
      },
      {
        emoji: "🧘",
        text: "Reflect alone, writing by moonlight",
        type: "📜"
      },
      {
        emoji: "🤸",
        text: "Practice acrobatics on lilypads",
        type: "⚔️"
      }
    ]
  }
];

export const results: Record<string, Result> = {
  "🧙": {
    type: "Contemplative Wizard Frog",
    emoji: "🧙",
    description: "You write to unravel mysteries, building intricate worlds and philosophies."
  },
  "🎭": {
    type: "Whimsical Bard Frog",
    emoji: "🎭",
    description: "Your stories burst with humour, adventure, and razor-sharp dialogue."
  },
  "📜": {
    type: "Solitary Poet Frog",
    emoji: "📜",
    description: "You craft aching, lyrical prose that haunts readers like swamp fog."
  },
  "⚔️": {
    type: "Disciplined Knight Frog",
    emoji: "⚔️",
    description: "You thrive on structure, drafting precise words with meticulous outlines."
  }
};