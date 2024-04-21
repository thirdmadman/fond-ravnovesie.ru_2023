import WaysToHelpPage from '@/app/ways-to-help/page';
import { render } from '@testing-library/react';

describe('Ways to help page', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
    }));

    vi.mock('@/components/shared/Header', () => ({
      Header: () => <div>HEADER</div>,
    }));

    vi.mock('@/components/ways-to-help/WaysToHelpCarousel', () => ({
      WaysToHelpCarousel: () => <div>WaysToHelpCarousel</div>,
    }));
  });

  it('should render without failing', () => {
    const { container } = render(<WaysToHelpPage />);
    expect(container.firstElementChild).not.toBeNull();
  });
});
