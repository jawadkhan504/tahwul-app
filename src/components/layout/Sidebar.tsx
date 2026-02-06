import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-width",
      collapsed ? "80px" : "280px",
    );
  }, [collapsed]);

  const navItems = [
    {
      name: "Dashboard",
      icon: "/images/icons/dashboard-icon.png",
      path: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      name: "Perspectives",
      icon: "/images/icons/perspectives-icon.png",
      path: "/perspectives",
      active: pathname === "/perspectives",
    },
    {
      name: "Tasks",
      icon: "/images/icons/tasks-icon.png",
      path: "/tasks",
      active: pathname === "/tasks",
    },
    {
      name: "Documents",
      icon: "/images/icons/documents-icon.png",
      path: "/documents",
      active: pathname === "/documents",
    },
    {
      name: "Reports",
      icon: "/images/icons/reports-icon.png",
      path: "/reports",
      active: pathname === "/reports",
    },
    {
      name: "Users & Roles",
      icon: "/images/icons/users-roles-icon.png",
      path: "/users",
      active: pathname === "/users",
    },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setCollapsed((s) => !s)}
        aria-expanded={!collapsed}
        aria-label={collapsed ? "Open sidebar" : "Close sidebar"}
      >
        <Image
          src="/images/icons/close-sidebar-icon.png"
          alt={collapsed ? "Open sidebar" : "Close sidebar"}
          width={16}
          height={16}
          className={styles.icon}
        />
      </button>

      <div>
        <Image
          src="/images/logo/logo.png"
          alt="Tahwul logo"
          width={100}
          height={40}
          className={styles.logo}
          style={{ marginTop: "10px", marginLeft: "23px" }}
        />
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <div key={item.path} className={styles.navItem}>
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={20}
              height={20}
              className={styles.iconImage}
            />
            <span className={styles.label}>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
