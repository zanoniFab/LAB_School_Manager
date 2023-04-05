import PropTypes from "prop-types";

function PageWrapper({ children }) {
  return <main className="pageWrapperContainer">{children}</main>;
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;