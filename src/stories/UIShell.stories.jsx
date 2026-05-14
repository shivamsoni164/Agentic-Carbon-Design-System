import { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@carbon/react';
import { Notification, UserAvatar, Switcher, Home, Dashboard, Report, Settings } from '@carbon/icons-react';

export default {
  title: 'Carbon / UI Shell',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The UI Shell is Carbon\'s top-level navigation pattern. It combines a Header (top bar) with an optional SideNav (left panel). Every enterprise screen should start with this — it is the most recognisable Carbon pattern and the first thing an agent needs to generate a full-page layout.',
      },
    },
  },
};

// ─── Header Only ──────────────────────────────────────────────────────────────
export const HeaderOnly = {
  name: 'Header only',
  parameters: {
    docs: {
      description: {
        story:
          'The simplest Shell — just a Header with a product name, navigation links, and global action icons. Use when you do not need a left-side panel.',
      },
    },
  },
  render: () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Design System">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="IBM">
            Carbon DS
          </HeaderName>
          <HeaderNavigation aria-label="Main navigation">
            <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
            <HeaderMenuItem href="#">Reports</HeaderMenuItem>
            <HeaderMenuItem href="#">Settings</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User profile" onClick={() => {}}>
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App switcher" onClick={() => {}}>
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  ),
};

// ─── Header + SideNav ─────────────────────────────────────────────────────────
export const HeaderWithSideNav = {
  name: 'Header + SideNav',
  parameters: {
    docs: {
      description: {
        story:
          'The full Shell pattern — Header on top, SideNav on the left. This is the standard layout for enterprise dashboards. The hamburger button in the Header toggles the SideNav open and closed.',
      },
    },
  },
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Carbon Design System">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                isActive={isSideNavExpanded}
                onClick={onClickSideNavExpand}
              />
              <HeaderName href="#" prefix="IBM">
                Carbon DS
              </HeaderName>
              <HeaderNavigation aria-label="Main navigation">
                <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
                <HeaderMenuItem href="#">Reports</HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Notifications">
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User profile">
                  <UserAvatar size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>

            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem href="#">Dashboard</HeaderMenuItem>
                  <HeaderMenuItem href="#">Reports</HeaderMenuItem>
                </HeaderSideNavItems>
                <SideNavLink renderIcon={Home} href="#" isActive>
                  Overview
                </SideNavLink>
                <SideNavLink renderIcon={Dashboard} href="#">
                  Dashboard
                </SideNavLink>
                <SideNavMenu renderIcon={Report} title="Reports">
                  <SideNavMenuItem href="#">Monthly summary</SideNavMenuItem>
                  <SideNavMenuItem href="#">Usage analytics</SideNavMenuItem>
                  <SideNavMenuItem href="#">Audit log</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink renderIcon={Settings} href="#">
                  Settings
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </>
        )}
      />
    </div>
  ),
};

// ─── Persistent SideNav ───────────────────────────────────────────────────────
export const PersistentSideNav = {
  name: 'Persistent SideNav (always visible)',
  parameters: {
    docs: {
      description: {
        story:
          'A persistent SideNav is always visible — no toggle needed. Use this layout for desktop-first applications where the navigation is central to the product experience.',
      },
    },
  },
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <HeaderContainer
        render={() => (
          <>
            <Header aria-label="Carbon Design System">
              <SkipToContent />
              <HeaderName href="#" prefix="IBM">
                Carbon DS
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Notifications">
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User profile">
                  <UserAvatar size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>

            <SideNav aria-label="Side navigation" isPersistent>
              <SideNavItems>
                <SideNavLink renderIcon={Home} href="#" isActive>
                  Overview
                </SideNavLink>
                <SideNavLink renderIcon={Dashboard} href="#">
                  Dashboard
                </SideNavLink>
                <SideNavMenu renderIcon={Report} title="Reports" defaultExpanded>
                  <SideNavMenuItem href="#" isActive>Monthly summary</SideNavMenuItem>
                  <SideNavMenuItem href="#">Usage analytics</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink renderIcon={Settings} href="#">
                  Settings
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </>
        )}
      />
    </div>
  ),
};
