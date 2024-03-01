import NotFundPage from '@/app/not-found';
import { render } from '@testing-library/react';

describe('Not found page', () => {
  it('should render without failing', () => {
    const { container } = render(<NotFundPage />);
    expect(container.firstElementChild).not.toBeNull();
  });
});
