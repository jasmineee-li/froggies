export type Answer = {
  emoji: string;
  text: string;
  type: "🧙" | "🎭" | "📜" | "⚔️" | "🧪" | "🤡";
};

export type Question = {
  id: number;
  text: string;
  description?: string;
  answers: Answer[];
};

export type Character = {
  name: string;
  description?: string;
  imagePath: string;
};

export type Result = {
  type: string;
  emoji: string;
  description: string;
};
