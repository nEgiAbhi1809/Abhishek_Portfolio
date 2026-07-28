import { GoogleGenerativeAI } from '@google/generative-ai';
import { systemPrompt } from '@/data/aiKnowledge';
import type { Project } from '@/types';

let genAI: GoogleGenerativeAI | null = null;

function getGenAI(): GoogleGenerativeAI | null {
  if (genAI) return genAI;
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('Gemini API key not found. Set VITE_GEMINI_API_KEY in .env');
    return null;
  }
  genAI = new GoogleGenerativeAI(apiKey);
  return genAI;
}

export async function chatWithGemini(userMessage: string): Promise<string> {
  const ai = getGenAI();
  if (!ai) {
    return "AI features are currently unavailable. Please set up the Gemini API key to enable the AI assistant.";
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
    const result = await model.generateContent([
      { text: systemPrompt },
      { text: `User question: ${userMessage}` },
    ]);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return "I'm having trouble connecting right now. Please try again or contact Abhishek directly at negiabhi1809@gmail.com";
  }
}

async function fetchGithubReadme(githubUrl: string): Promise<string | null> {
  try {
    // Extract username/repo from https://github.com/username/repo
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;
    const [, owner, repo] = match;

    // Try main branch first, then master
    const urlsToTry = [
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/main/readme.md`,
      `https://raw.githubusercontent.com/${owner}/${repo}/master/readme.md`,
    ];

    for (const url of urlsToTry) {
      const res = await fetch(url);
      if (res.ok) {
        return await res.text();
      }
    }
  } catch (error) {
    console.warn('Failed to fetch README:', error);
  }
  return null;
}

export async function explainProject(project: Project): Promise<string> {
  const ai = getGenAI();
  if (!ai) return "AI features are currently unavailable.";

  try {
    let readmeContext = "";
    if (project.github) {
      const readme = await fetchGithubReadme(project.github);
      if (readme) {
        // Truncate README if it's too long to save tokens (keep first 3000 chars)
        readmeContext = `\n\nHere is the actual GitHub README for the project for deep technical context:\n${readme.slice(0, 3000)}`;
      }
    }

    const model = ai.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
    const result = await model.generateContent([
      { text: systemPrompt },
      { text: `Explain the architecture, technical decisions, and implementation details of Abhishek's project: "${project.title}". Focus on the technical depth and engineering challenges. Keep it under 250 words.${readmeContext}` },
    ]);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return "Unable to generate explanation right now.";
  }
}

export async function explainSkill(skillName: string): Promise<string> {
  const ai = getGenAI();
  if (!ai) return "AI features are currently unavailable.";

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
    const result = await model.generateContent([
      { text: systemPrompt },
      { text: `Explain specifically how Abhishek has used "${skillName}" in his work and projects. Be concise and specific. If he hasn't used this exact technology, mention what related technologies he has used. Keep it under 150 words.` },
    ]);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return "Unable to generate explanation right now.";
  }
}

export async function generateRecruiterSummary(): Promise<string> {
  const ai = getGenAI();
  if (!ai) return "AI features are currently unavailable.";

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
    const result = await model.generateContent([
      { text: systemPrompt },
      { text: `Generate a professional one-page recruiter summary for Abhishek Singh Negi. Include: Executive summary (2-3 sentences), Key technical skills, Professional experience highlights, Notable projects with impact metrics, Competitive programming achievements, Education, and Contact information. Format it professionally with clear sections. Use markdown formatting.` },
    ]);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return "Unable to generate summary right now.";
  }
}

export function isGeminiAvailable(): boolean {
  return !!import.meta.env.VITE_GEMINI_API_KEY;
}
