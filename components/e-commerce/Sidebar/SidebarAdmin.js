import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Link from "next/link";

import s from "./Sidebar.module.scss";
import LinksGroup from "components/e-commerce/Sidebar/LinksGroup";

import {
  openSidebar,
  closeSidebar,
  changeActiveSidebarItem,
} from "actions/navigation";
import { logoutUser } from "actions/auth";

import HomeIcon from "images/e-commerce/sidebar/home";
import DownloadIcon from "images/e-commerce/sidebar/download";
import BarIcon from "images/e-commerce/sidebar/bar";
import FileIcon from "images/e-commerce/sidebar/file";
import GridIcon from "images/e-commerce/sidebar/grid";
import PersonIcon from "images/e-commerce/sidebar/person";
import PricetagIcon from "images/e-commerce/sidebar/pricetag";
import SettingsIcon from "images/e-commerce/sidebar/settings";
import ShoppingIcon from "images/e-commerce/sidebar/shopping";

class Sidebar extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    sidebarStatic: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    activeItem: PropTypes.string,
    currentUser: PropTypes.object,
    router: PropTypes.object.isRequired,
  };

  static defaultProps = {
    sidebarOpened: true,
    activeItem: "",
  };

  doLogout = () => {
    this.props.dispatch(logoutUser());
  };

  renderLink = (link, content) => (
    <Link href={link} passHref legacyBehavior>
      <a>{content}</a>
    </Link>
  );

  render() {
    const { sidebarOpened, sidebarStatic, activeItem, currentUser } =
      this.props;

    const isAdmin = currentUser?.role === "admin";

    return (
      <div
        className={`${!sidebarOpened && !sidebarStatic ? s.sidebarClose : ""} ${
          s.sidebarWrapper
        }`}
      >
        <nav className={s.root}>
          <header className={s.logo}>
            <span className={`${s.logoStyle} mx-1`}>
              Flatlogic<i>.</i>
            </span>
          </header>

          <ul className={s.nav}>
            {this.renderLink(
              "/app/dashboard",
              <LinksGroup
                onActiveSidebarItemChange={(item) =>
                  this.props.dispatch(changeActiveSidebarItem(item))
                }
                activeItem={activeItem}
                header="Index"
                isHeader
                iconType="node"
                iconName={<HomeIcon />}
              />
            )}

            {isAdmin &&
              this.renderLink(
                "/admin/orders",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Orders"
                  isHeader
                  iconType="node"
                  iconName={<DownloadIcon />}
                />
              )}

            {isAdmin &&
              this.renderLink(
                "/admin/products",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Products"
                  isHeader
                  iconType="node"
                  iconName={<PricetagIcon />}
                />
              )}

            {isAdmin &&
              this.renderLink(
                "/admin/users",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Customers"
                  isHeader
                  iconType="node"
                  iconName={<PersonIcon />}
                />
              )}

            {isAdmin &&
              this.renderLink(
                "/admin/analytics",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Analytics"
                  isHeader
                  iconType="node"
                  iconName={<BarIcon />}
                />
              )}

            {isAdmin &&
              this.renderLink(
                "/admin/marketing",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Marketing"
                  isHeader
                  iconType="node"
                  iconName={<FileIcon />}
                />
              )}

            {isAdmin && (
              <>
                {this.renderLink(
                  "/admin/discounts",
                  <LinksGroup
                    onActiveSidebarItemChange={(item) =>
                      this.props.dispatch(changeActiveSidebarItem(item))
                    }
                    activeItem={activeItem}
                    header="Discounts"
                    isHeader
                  />
                )}

                {this.renderLink(
                  "/admin/apps",
                  <LinksGroup
                    onActiveSidebarItemChange={(item) =>
                      this.props.dispatch(changeActiveSidebarItem(item))
                    }
                    activeItem={activeItem}
                    header="Apps"
                    isHeader
                    iconType="node"
                    iconName={<GridIcon />}
                  />
                )}
              </>
            )}

            {isAdmin && <span className={s.dividerText}>Sales Channels</span>}

            {isAdmin &&
              this.renderLink(
                "/admin/store",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Online Store"
                  isHeader
                  iconType="node"
                  iconName={<ShoppingIcon />}
                />
              )}

            {isAdmin &&
              this.renderLink(
                "/admin/settings",
                <LinksGroup
                  onActiveSidebarItemChange={(item) =>
                    this.props.dispatch(changeActiveSidebarItem(item))
                  }
                  activeItem={activeItem}
                  header="Settings"
                  isHeader
                  iconType="node"
                  iconName={<SettingsIcon />}
                  className={s.sidebarBottomItem}
                />
              )}

            {this.renderLink(
              "/app/profile",
              <LinksGroup
                onActiveSidebarItemChange={(item) =>
                  this.props.dispatch(changeActiveSidebarItem(item))
                }
                activeItem={activeItem}
                header="My Profile"
                isHeader
                iconName="la-user"
              />
            )}

            {this.renderLink(
              "/app/password",
              <LinksGroup
                onActiveSidebarItemChange={(item) =>
                  this.props.dispatch(changeActiveSidebarItem(item))
                }
                activeItem={activeItem}
                header="Change Password"
                isHeader
                iconName="la-key"
              />
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    activeItem: store.navigation.activeItem,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Sidebar);
