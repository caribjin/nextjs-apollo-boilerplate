export const dateShortFormat = (date: string) => {
  if (!date) return '';

  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const isServer = () => typeof window === 'undefined';
export const isClient = () => typeof window !== 'undefined';
