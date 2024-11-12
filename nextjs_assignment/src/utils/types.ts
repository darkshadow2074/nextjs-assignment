export interface HeaderProps {
  headerConfig: {
    brandName: string;
    navLinks: {
      label: string;
      href: string;
      isDropdown: boolean;
    }[];
    ctaButton: {
      secondaryCtaButton: {
        label: string;
        href: string;
      };
      primaryCtaButton: {
        label: string;
        href: string;
      };
    };
  };
}

export interface HeroBannerProps {
  crouselComponent: {
    isTimer: boolean;
    title: string;
    showName: boolean;
    marketInfo: string;
    imageUrl: string;
  }[];
}

export interface CTA {
  coins: number;
  ctaLabel: string;
}

export interface PostContent {
  avatarUrl: string;
  name: string;
  endsInTimer: boolean;
  postDescription: string;
  hashTags: string[];
  primaryCTA: CTA;
  secondaryCTA: CTA;
  postViewed: string;
}

export interface TabItem {
  label: string;
  showSvgs: boolean;
  content: PostContent[];
}

export interface TabContentProps {
  tabContent: {
    label: string;
    showSvgs: boolean;
    content: TabItem[];
  };
}
