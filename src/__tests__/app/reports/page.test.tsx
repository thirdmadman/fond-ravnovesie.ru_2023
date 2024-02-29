import Reports from '@/app/reports/page';
import { render } from '@testing-library/react';

describe('Reports page', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
    }));

    vi.mock('@/components/shared/Header', () => ({
      Header: () => <div>HEADER</div>,
    }));
  });

  it('should render without failing', () => {
    const { container } = render(<Reports />);
    expect(container.firstElementChild).not.toBeNull();
  });
});
