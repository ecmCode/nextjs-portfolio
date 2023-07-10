import { BsInstagram, BsDiscord, BsGithub } from "react-icons/bs";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import styles from "./ContactInfo.module.css";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className={styles.box}>
      <div>
        <h4 className={styles.contacts}>
          <HiPhone />
          012345678
        </h4>
        <h4 className={styles.contacts}>
          <HiOutlineMail />
          example@example.com
        </h4>
      </div>
      <div className={styles.social}>
        <div>
          <Link href="https://github.com/">
            <BsGithub />
          </Link>
          <span>Github</span>
        </div>
        <div>
          <Link href="https://www.instagram.com/">
            <BsInstagram />
          </Link>
          <span>Instagram</span>
        </div>
        <div>
          <Link href="https://discord.com/">
            <BsDiscord />
          </Link>
          <span>Discord</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
