import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Portfolio",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-bottom"
            id={"portfolio"}
          />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React.js Powered
                </div>
                <h3 className="mt-0 mb-12">Employee Directory</h3>
                <p className="m-0">
                  A simple and easy-to-use employee directory application built
                  with React and Material-UI. Each column of data is sortable
                  (asc & desc), searchable, and can also be filtered and hidden
                  to allow the user to narrow their results. The application
                  makes an API call, parses the response and automatically
                  builds out the table. A user is able to view 25, 50, or 100
                  employees per page.
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://mbussert.github.io/react-employee-directory/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href="https://github.com/mbussert/react-employee-directory"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/empdir.png")}
                  alt="Employee Directory"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Progressive Web Application & MongoDB
                </div>
                <h3 className="mt-0 mb-12">PWA Budget Tracker</h3>
                <p className="m-0">
                  Allows users a fast and easy way to track their money.
                  Includes offline functionality so that the application is
                  useable without data or an internet connection. As a
                  progressive web application (PWA), a user can install this
                  application on their smart phone or tablet and even use it
                  offline. Enter either credits or debits to your personal
                  budget and track purchases with ease. When the app detects an
                  internet connection, it will automatically push all entered
                  data to the database.
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://enigmatic-scrubland-28964.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href="https://github.com/mbussert/budget-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/budgettracker.png")}
                  alt="Budget Tracker"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  MySQL | Handlebars | Tailwind CSS | Express | Axios
                </div>
                <h3 className="mt-0 mb-12">GiftEZ</h3>
                <p className="m-0">
                  GiftEZ helps users create personalized wishlists and gives
                  them the option to email them to their friends and family. The
                  user can name their Wishlist fun names to make it more
                  inviting, but still includes a direct link the to the specific
                  item they want to share. Once a user registers an account,
                  they are able to search through the GiftEZ app for any
                  products listed on Amazon.com by using the Rainforest API.
                  Darkmode theme persists throughout the website based on the
                  user&#8217;s preferences or system setting.
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://giftez.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href="https://github.com/mbussert/giftez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/giftez.png")}
                  alt="GiftEZ"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Content Management System
                </div>
                <h3 className="mt-0 mb-12">The Tech Blog - CMS</h3>
                <p className="m-0">
                  A content management system (CMS) style blog platform that
                  allows users to create accounts, post, comment, edit, and
                  delete their own posts. Built using HTML, CSS, Bootstrap v5,
                  jQuery, Handlebars.js, Express.js, Node.js, Sequelize, MySQL,
                  and Express-Session.
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://afternoon-spire-21362.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href="https://github.com/mbussert/tech-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/techblog.png")}
                  alt="The Tech Blog"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  FrontendMentor.io / Practice
                </div>
                <h3 className="mt-0 mb-12">Insure Landing Page</h3>
                <p className="m-0">
                  A landing page developed for Insure as part of the
                  FrontendMentor.io challenge. Created using only HTML, CSS
                  (Grid & Flexbox).
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://github.com/mbussert/insure-landing-page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/insure.png")}
                  alt="GiftEZ"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  MongoDB & Mongoose Backend
                </div>
                <h3 className="mt-0 mb-12">Fitness Tracker</h3>
                <p className="m-0">
                  An app to view create and track daily workouts. A user can log
                  multiple exercises in a workout on a given day and also track
                  the name, type, weight, sets, reps, and duration of exercise.
                  A user creates a new workout or continues an already existing
                  workout by adding an exercise. All workouts are tracked and
                  displayed on the user dashboard.
                </p>
                <div className="text-color-primary fw-600 tt-u mt-8">
                  <a
                    href="https://agile-waters-85580.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href="https://github.com/mbussert/workout-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/portfolio-imgs/fitnesstracker.png")}
                  alt="Fitness Tracker"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
