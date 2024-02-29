import Home from '@/app/page';
import { render } from '@testing-library/react';

describe('Home page', () => {
  beforeAll(() => {
    vi.mock('next/image', () => ({
      default: () => <div>img</div>,
    }));

    vi.mock('@/components/shared/Header', () => ({
      Header: () => <div>HEADER</div>,
    }));

    vi.mock('@/components/home/TeamCarousel', () => ({
      TeamCarousel: () => <div>TeamCarousel</div>,
    }));

    vi.mock('@/components/home/ProjectsGroupCardCarousel', () => ({
      ProjectsGroupCardCarousel: () => <div>ProjectsGroupCardCarousel</div>,
    }));
  });

  it('should render without failing', () => {
    const { container } = render(Home());
    expect(container.firstElementChild).not.toBeNull();
  });
});
