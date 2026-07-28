import { useState, useEffect } from 'react';
import { GITHUB_USERNAME, GITHUB_API_URL } from '@/lib/constants';
import type { GitHubStats, GitHubRepo } from '@/types';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

export function useGitHub() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        // Fetch user profile
        const userRes = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error('Failed to fetch GitHub profile');
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(
          `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`
        );
        if (!reposRes.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposRes.json();

        // Calculate language distribution
        const languageCounts: Record<string, number> = {};
        let totalStars = 0;

        const repos: GitHubRepo[] = reposData
          .filter((repo: Record<string, unknown>) => !repo.fork)
          .map((repo: Record<string, unknown>) => {
            if (typeof repo.stargazers_count === 'number') {
              totalStars += repo.stargazers_count;
            }
            const lang = (repo.language as string) || 'Other';
            languageCounts[lang] = (languageCounts[lang] || 0) + 1;

            return {
              name: repo.name as string,
              description: (repo.description as string) || 'No description',
              language: lang,
              stars: repo.stargazers_count as number,
              forks: repo.forks_count as number,
              url: repo.html_url as string,
              homepage: repo.homepage as string | undefined,
              topics: (repo.topics as string[]) || [],
              updatedAt: repo.updated_at as string,
            };
          });

        // Calculate language percentages
        const totalRepos = Object.values(languageCounts).reduce((a, b) => a + b, 0);
        const topLanguages = Object.entries(languageCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalRepos) * 100),
            color: LANGUAGE_COLORS[name] || '#8b5cf6',
          }));

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          topLanguages,
          repos: repos.slice(0, 6),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        // Fallback data
        setStats({
          publicRepos: 26,
          followers: 1,
          following: 1,
          totalStars: 1,
          topLanguages: [
            { name: 'JavaScript', percentage: 50, color: '#f1e05a' },
            { name: 'TypeScript', percentage: 20, color: '#3178c6' },
            { name: 'Python', percentage: 15, color: '#3572A5' },
            { name: 'C++', percentage: 10, color: '#f34b7d' },
            { name: 'HTML', percentage: 5, color: '#e34c26' },
          ],
          repos: [],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { stats, loading, error };
}
