import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaBlog,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
  FaStarOfLife,
  FaArchway,
} from "react-icons/fa";

import { MdManageAccounts } from "react-icons/md";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { VscOrganization } from "react-icons/vsc";

const iconTypes = {
  platform: VscOrganization,
  human: MdManageAccounts,
  life: FaStarOfLife,
  way: FaArchway,
  facebook: FaFacebook,
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowright: FaArrowRight,
  regfilealt: FaRegFileAlt,
  infocircle: FaInfoCircle,
  wifi: FaWifi,
  star: FaStar,
  home: FaHome,
  blog: FaBlog,
  sitemap: FaSitemap,
  google: FaGoogle,
  mobilealt: FaMobileAlt,
  rev: FaRev,
  alignleft: FaAlignLeft,
  menu: AiOutlineMenu,
  menuClose: AiOutlineClose,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
