import Image from "next/image";
import styles from "./Header.module.scss";

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={onMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <Image
          src="/images/icons/search-icon.png"
          alt="Search"
          className={styles.searchIcon}
          width={16}
          height={16}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <Image
            src="/images/icons/notifications-icon.png"
            alt="Notifications"
            width={16}
            height={16}
          />
          <div className={styles.notificationBadge} />
        </button>
        <div className={styles.user}>
          <Image
            src="/images/avatars/profile-pic.jpg"
            alt="User Avatar"
            width={16}
            height={16}
            className={styles.userAvatar}
          />
          <span className={styles.userName}>Mohamed</span>
          <Image
            src="/images/icons/caret-down-icon.png"
            alt="Caret-Down"
            width={16}
            height={16}
            className={styles.userCaret}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
