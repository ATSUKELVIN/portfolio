import { useState, useEffect } from 'react';

export const useProjectStats = () => {
  const [stats, setStats] = useState({ inDevelopment: 0, upcoming: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/projects/stats')
      .then(res => res.json())
      .then(data => {
        // Transform backend array into a usable object
        const devCount = data.find((s: any) => s.status === 'In Development')?.count || 0;
        const upcomingCount = data.find((s: any) => s.status === 'Upcoming')?.count || 0;
        setStats({ inDevelopment: devCount, upcoming: upcomingCount });
      });
  }, []);

  return stats;
};