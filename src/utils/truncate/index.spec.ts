import { truncateText } from '.';

describe('Utils/TruncateText', () => {
  it('should render text with 23 characters', () => {
    const text = 'lorem lorem lorem lorem';

    expect(truncateText(text, 23)).toHaveLength(23);
    expect(truncateText(text, 23)).toBe(text);
  });

  it('should render text with truncate text', () => {
    const text = 'lorem lorem lorem lorem';

    expect(truncateText(text, 20)).toHaveLength(23);
    expect(truncateText(text, 20)).toBe('lorem lorem lorem lo...');
  });
});
