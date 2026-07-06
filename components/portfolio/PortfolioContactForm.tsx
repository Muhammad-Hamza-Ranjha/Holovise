import { FigmaContactForm } from "@/components/forms/FigmaContactForm";

type PortfolioContactFormProps = {
  theme: "dark" | "light";
};

export function PortfolioContactForm({ theme }: PortfolioContactFormProps) {
  return (
    <FigmaContactForm
      ariaLabel="Portfolio contact form"
      left={theme === "dark" ? 753 : 740}
      subjectContext="portfolio"
      theme={theme}
      top={theme === "dark" ? 4187 : 4035}
    />
  );
}
