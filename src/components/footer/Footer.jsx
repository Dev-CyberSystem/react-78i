
import SocialLogos from "./Socials/SocialLogos"

const Footer = () => {
  return (
    <div className="container d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center footer-container gap-3">
        <section className="container text-white fw-semibold text-start">
            Rolling Code School &copy; {new Date().getFullYear()}
        </section>
        <SocialLogos />
    </div>
  )
}

export default Footer
