import HeroSection from "./HeroSection"

export default function HeroSectionWrapper({ searchTerm, setSearchTerm }) {
  return <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
}