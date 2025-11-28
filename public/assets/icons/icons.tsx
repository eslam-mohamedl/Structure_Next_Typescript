import type { ComponentProps } from "react";
import {
  Moon,
  Sun,
  Globe,
  ListMinus,
  X,
  Eye,
  EyeOff,
  Trash2,
  BellRing,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Check,
  LucideShieldCheck,
} from "lucide-react";

import { Icon } from "@iconify/react";

import icon1 from "../../../public/assets/images/icons/icon1.png";
import icon2 from "../../../public/assets/images/icons/icon2.png";
import icon3 from "../../../public/assets/images/icons/icon3.png";
import icon4 from "../../../public/assets/images/icons/icon4.png";
import service1 from "../../../public/assets/images/icons/service1.png";
import service2 from "../../../public/assets/images/icons/service2.png";
import service3 from "../../../public/assets/images/icons/service3.png";

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
  HelpCircle,
  Trash2,
  BellRing,
  CheckCircle2,
  Check,
  ChevronLeft,
  ChevronRight,
  icon1,
  icon2,
  icon3,
  icon4,
  service1,
  service2,
  service3,
  LucideShieldCheck,
};
