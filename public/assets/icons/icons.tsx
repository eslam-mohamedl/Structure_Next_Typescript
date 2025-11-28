import type { ComponentProps } from "react";
import {
  Moon,
  Sun,
  Globe,
  ListMinus,
  X,
  Eye,
  EyeOff,
} from "lucide-react";
import { Icon } from "@iconify/react";
type IconProps = Omit<ComponentProps<typeof Icon>, "icon">;
const FaFacebookF = (props: IconProps) => <Icon icon="mdi:facebook" {...props} />;
const FaInstagram = (props: IconProps) => <Icon icon="mdi:instagram" {...props} />;
const FaYoutube = (props: IconProps) => <Icon icon="mdi:youtube" {...props} />;
const FaSnapchatGhost = (props: IconProps) => <Icon icon="mdi:snapchat" {...props} />;
const FaLinkedinIn = (props: IconProps) => <Icon icon="mdi:linkedin" {...props} />;
const FaXTwitter = (props: IconProps) => <Icon icon="mdi:twitter" {...props} />;
const IoCall = (props: IconProps) => <Icon icon="mdi:phone" {...props} />;
const MdEmail = (props: IconProps) => <Icon icon="mdi:email" {...props} />;
const MdLocationOn = (props: IconProps) => <Icon icon="mdi:map-marker" {...props} />;

export {
  Moon,
  Sun,
  Globe,
  ListMinus,
  X,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaLinkedinIn,
  FaXTwitter,
  IoCall,
  MdEmail,
  MdLocationOn,
  Eye,
  EyeOff,

};
