import './Layout.css';

/**
 * Page shell with consistent max-width and vertical rhythm.
 */
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export default Layout;
