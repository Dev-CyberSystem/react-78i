import Ico_Facebook from "../../../assets/icons/ico_fb"
import Ico_Instagram from "../../../assets/icons/ico_insta"
import Ico_Twitter from "../../../assets/icons/ico_tw"

const SocialLogos = () => {
  return (
    <div className="d-flex justify-content-around align-items-center gap-5">
        <Ico_Facebook width={35} height={35}/>
        <Ico_Instagram width={35} height={35}/>
        <Ico_Twitter width={35} height={35}/>
    </div>
  )
}

export default SocialLogos
