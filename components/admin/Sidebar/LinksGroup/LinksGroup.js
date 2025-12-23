import React, { Component } from "react";
import PropTypes from "prop-types";
import { Collapse, Badge } from "reactstrap";
import classnames from "classnames";
import Link from "next/link";
import { withRouter } from "next/router";

import s from "./LinksGroup.module.scss";

class LinksGroup extends Component {
  static propTypes = {
    childrenLinks: PropTypes.array,
    iconName: PropTypes.node,
    iconType: PropTypes.string,
    className: PropTypes.string,
    badge: PropTypes.string,
    label: PropTypes.string,
    activeItem: PropTypes.string,
    isHeader: PropTypes.bool,
    index: PropTypes.string,
    deep: PropTypes.number,
    onActiveSidebarItemChange: PropTypes.func,
    labelColor: PropTypes.string,
    link: PropTypes.string,
    header: PropTypes.string,
  };

  static defaultProps = {
    link: "",
    childrenLinks: null,
    className: "",
    isHeader: false,
    deep: 0,
    activeItem: "",
    label: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      headerLinkWasClicked: true,
    };
  }

  togglePanelCollapse = (link) => {
    this.props.onActiveSidebarItemChange?.(link);
    this.setState((prev) => ({
      headerLinkWasClicked:
        !prev.headerLinkWasClicked ||
        ((this.props.activeItem || link) &&
          !this.props.activeItem.includes(this.props.index)),
    }));
  };

  render() {
    const { headerLinkWasClicked } = this.state;

    const isOpen =
      this.props.activeItem &&
      this.props.activeItem.includes(this.props.index) &&
      headerLinkWasClicked;

    // ===== SIMPLE LINK (NO CHILDREN) =====
    if (!this.props.childrenLinks) {
      return (
        <li
          className={classnames(
            "link-wrapper",
            this.props.isHeader && s.headerLink,
            this.props.className
          )}
        >
          <Link href={this.props.link} passHref legacyBehavior>
            <a
              onClick={() =>
                this.props.onActiveSidebarItemChange?.(this.props.link)
              }
            >
              {this.props.iconType === "text" ? (
                <span className={classnames("icon", s.icon)}>
                  <i className={`la ${this.props.iconName}`} />
                </span>
              ) : (
                <span className={s.iconWrapper}>{this.props.iconName}</span>
              )}

              {this.props.header}

              {this.props.label && (
                <sup
                  className={`${s.headerLabel} text-${
                    this.props.labelColor || "warning"
                  }`}
                >
                  {this.props.label}
                </sup>
              )}

              {this.props.badge && (
                <Badge className={s.badge} pill>
                  9
                </Badge>
              )}
            </a>
          </Link>
        </li>
      );
    }

    // ===== LINK WITH CHILDREN (COLLAPSIBLE) =====
    return (
      <li
        className={classnames(
          "link-wrapper",
          { [s.headerLink]: this.props.isHeader },
          this.props.className
        )}
      >
        <a
          href="#"
          className={classnames({ [s.collapsed]: isOpen }, "d-flex")}
          style={{
            paddingLeft: `${
              this.props.deep === 0 ? 24 : 26 + 10 * (this.props.deep - 1)
            }px`,
          }}
          onClick={(e) => {
            e.preventDefault();
            this.togglePanelCollapse(this.props.link);
          }}
        >
          {this.props.iconType === "text" ? (
            <span className={classnames("icon", s.icon)}>
              <i className={`la ${this.props.iconName}`} />
            </span>
          ) : (
            <span className={s.iconWrapper}>{this.props.iconName}</span>
          )}

          {this.props.header}

          {this.props.label && (
            <sup
              className={`${s.headerLabel} ${s.headerNode} ml-1 text-${
                this.props.labelColor || "warning"
              }`}
            >
              {this.props.label}
            </sup>
          )}

          <b className={["la la-angle-left", s.caret].join(" ")} />
        </a>

        <Collapse className={s.panel} isOpen={isOpen}>
          <ul>
            {this.props.childrenLinks.map((child, ind) => (
              <LinksGroup
                key={ind}
                {...child}
                onActiveSidebarItemChange={this.props.onActiveSidebarItemChange}
                activeItem={this.props.activeItem}
                deep={this.props.deep + 1}
              />
            ))}
          </ul>
        </Collapse>
      </li>
    );
  }
}

export default withRouter(LinksGroup);
