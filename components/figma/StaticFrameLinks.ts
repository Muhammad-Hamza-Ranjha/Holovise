export type StaticFrameLink = {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export function commonFrameLinks(_height: number): StaticFrameLink[] {
  void _height;

  return [
    { href: "/", label: "Home", left: 55, top: 67, width: 208, height: 46 },
    { href: "/about", label: "About", left: 533, top: 76, width: 103, height: 28 },
    { href: "/blog", label: "Blog", left: 814, top: 76, width: 62, height: 28 },
    { href: "/career", label: "Careers", left: 903, top: 76, width: 92, height: 28 },
    { href: "/contact-us", label: "Get in Touch", left: 1022, top: 68, width: 152, height: 44 },
    { href: "/side-drawer", label: "Open menu", left: 1344, top: 78, width: 41, height: 24 },
    { href: "/contact-us", label: "Get Started", left: 1390, top: 403, width: 50, height: 200 },
  ];
}

export function footerFrameLinks(height: number): StaticFrameLink[] {
  const firstRow = height - 774;

  return [
    { href: "/about", label: "About", left: 130, top: firstRow, width: 215, height: 30 },
    { href: "/services/full-stack-development", label: "Services", left: 130, top: firstRow + 38, width: 215, height: 30 },
    { href: "/blog", label: "News and Blogs", left: 130, top: firstRow + 76, width: 215, height: 30 },
    { href: "/career", label: "Careers", left: 130, top: firstRow + 114, width: 215, height: 30 },
    { href: "/contact-us", label: "Contact", left: 130, top: firstRow + 152, width: 215, height: 30 },
    { href: "/services/web-app-development", label: "Web Applications", left: 430, top: firstRow, width: 215, height: 30 },
    { href: "/services/mobile-app-development", label: "Mobile Applications", left: 430, top: firstRow + 38, width: 215, height: 30 },
    { href: "/services/desktop-app-development", label: "Desktop Applications", left: 430, top: firstRow + 76, width: 215, height: 30 },
    { href: "/services/ai-ml-development", label: "AI and ML Development", left: 430, top: firstRow + 114, width: 215, height: 30 },
    { href: "/services/software-security", label: "Software Security", left: 430, top: firstRow + 152, width: 215, height: 30 },
    { href: "/services/devsecops", label: "DevSecOps Solutions", left: 430, top: firstRow + 190, width: 215, height: 30 },
    { href: "/services/blockchain-development", label: "Blockchain", left: 430, top: firstRow + 228, width: 215, height: 30 },
    { href: "/services/web-3-development", label: "Web 3.0", left: 430, top: firstRow + 266, width: 215, height: 30 },
    { href: "/services/metaverse-ar-vr", label: "Metaverse AR and VR", left: 430, top: firstRow + 304, width: 215, height: 30 },
    { href: "/services/ui-ux-design", label: "UI UX Design", left: 430, top: firstRow + 342, width: 215, height: 30 },
    { href: "/services/game-development", label: "Game Development", left: 430, top: firstRow + 380, width: 215, height: 30 },
    { href: "/services/digital-transformation", label: "Digital Transformation", left: 730, top: firstRow, width: 215, height: 30 },
    { href: "/services/mvp-development", label: "MVP Development", left: 730, top: firstRow + 38, width: 215, height: 30 },
    { href: "/services/no-code-development", label: "No Code", left: 730, top: firstRow + 76, width: 215, height: 30 },
    { href: "/services/product-strategy-consulting", label: "Product Strategy", left: 730, top: firstRow + 114, width: 215, height: 30 },
    { href: "/services/staff-augmentation", label: "Staff Augmentation", left: 1030, top: firstRow, width: 215, height: 30 },
    { href: "/services/investment", label: "Investment", left: 1030, top: firstRow + 38, width: 215, height: 30 },
    { href: "/services/software-development-outsourcing", label: "Dedicated Development Team", left: 1030, top: firstRow + 76, width: 215, height: 30 },
    { href: "/services/software-development-outsourcing", label: "Software Development Outsourcing", left: 1030, top: firstRow + 114, width: 215, height: 30 },
    { href: "/privacy-policy", label: "Privacy Policy", left: 1088, top: height - 74, width: 82, height: 28 },
    { href: "/cookie-consent", label: "Cookies", left: 1194, top: height - 74, width: 50, height: 28 },
    { href: "/terms-and-conditions", label: "Terms and Conditions", left: 1268, top: height - 74, width: 117, height: 28 },
  ];
}
