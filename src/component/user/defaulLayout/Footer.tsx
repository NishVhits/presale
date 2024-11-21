import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";
import { contactUsForm } from "./defaultLayoutInterface";
import { FormikHelpers } from "formik";

export default function Footer() {
  const initialValues: contactUsForm = {
    user_type: "investor",
    name: "",
    email: "",
    telegram: "",
    message: ""
  };
  const handleSubmitForm = async (
    values: contactUsForm,
    { resetForm }: FormikHelpers<contactUsForm>
  ) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("user_type", values?.user_type || "");
    urlencoded.append("name", values?.name.replace(/\s+/g, " ").trim());
    urlencoded.append(
      "telegram",
      values?.telegram.replace(/\s+/g, "").trim() || ""
    );
    urlencoded.append("email", values?.email || "");
    urlencoded.append(
      "message",
      values?.message.replace(/\s+/g, " ").trim() || ""
    );

    try {
      const res = await PagesIndex.apiPostHandler(
        PagesIndex.Api.ADD_CONTACT_US,
        urlencoded
      );
      if (res.status === 200 || res.status === 201) {
        resetForm();
        PagesIndex.toasterSuccess(res?.message);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return (
    <>
      <Index.Box className="footer-main">
        <Index.Box className="container">
          <Index.Box className="footer-row">
            <Index.Typography className="footer-title">
              Looking to promote your project or discover exciting investment
              opportunities?
            </Index.Typography>
            <Index.Typography className="footer-para">
              Leave a request and our managers will contact you and discuss all
              the details
            </Index.Typography>
            <PagesIndex.Formik
              enableReinitialize
              onSubmit={handleSubmitForm}
              initialValues={initialValues}
              validationSchema={PagesIndex.contactUsFormSchema}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <PagesIndex.Form onSubmit={handleSubmit}>
                  <Index.Box sx={{ width: "100%" }} className="tabs-main">
                    <Index.Box className="footer-form-main">
                      <fieldset
                        className="custom-radio-box"
                        name="user_type"
                        onChange={handleChange}
                      >
                        <div className="custom-radio-form custom-radio-field">
                          <input
                            className="custom-radio-form-input custom-radio-input"
                            type="radio"
                            value="investor"
                            name="user_type"
                            checked={values?.user_type === "investor"}
                          />
                          <div className="custom-radio-para-box">
                            <p className="custom-radio-para">I'm an investor</p>
                          </div>
                        </div>

                        <div className="custom-radio-form custom-radio-field">
                          <input
                            className="custom-radio-form-input custom-radio-input"
                            type="radio"
                            value="developer"
                            name="user_type"
                            checked={values?.user_type === "developer"}
                          />
                          <div className="custom-radio-para-box">
                            <p className="custom-radio-para">
                              We're developers
                            </p>
                          </div>
                        </div>
                      </fieldset>
                      <Index.Box sx={{ width: 1 }} className="grid-main">
                        <Index.Box
                          display="grid"
                          gridTemplateColumns="repeat(12, 1fr)"
                          gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                          className="footer-form-row"
                        >
                          <Index.Box
                            gridColumn={{
                              xs: "span 12",
                              sm: "span 12",
                              md: "span 12",
                              lg: "span 12"
                            }}
                            className="grid-column"
                          >
                            <Index.Box className="input-box footer-input">
                              <Index.Box className="form-group">
                                <Index.TextField
                                  fullWidth
                                  id="fullWidth"
                                  className="form-control"
                                  placeholder="Name"
                                  name="name"
                                  value={values?.name}
                                  onChange={handleChange}
                                />
                                <Index.FormHelperText error>
                                  {errors?.name && touched?.name
                                    ? errors?.name
                                    : null}
                                </Index.FormHelperText>
                              </Index.Box>
                            </Index.Box>
                          </Index.Box>
                          <Index.Box
                            gridColumn={{
                              xs: "span 12",
                              sm: "span 6",
                              md: "span 6",
                              lg: "span 6"
                            }}
                            className="grid-column"
                          >
                            <Index.Box className="input-box footer-input">
                              <Index.Box className="form-group">
                                <Index.TextField
                                  fullWidth
                                  id="fullWidth"
                                  className="form-control"
                                  placeholder="Telegram"
                                  name="telegram"
                                  value={values?.telegram}
                                  onChange={handleChange}
                                />
                                <Index.FormHelperText error>
                                  {errors?.telegram && touched?.telegram
                                    ? errors?.telegram
                                    : null}
                                </Index.FormHelperText>
                              </Index.Box>
                            </Index.Box>
                          </Index.Box>
                          <Index.Box
                            gridColumn={{
                              xs: "span 12",
                              sm: "span 6",
                              md: "span 6",
                              lg: "span 6"
                            }}
                            className="grid-column"
                          >
                            <Index.Box className="input-box footer-input">
                              <Index.Box className="form-group">
                                <Index.TextField
                                  fullWidth
                                  id="fullWidth"
                                  className="form-control"
                                  placeholder="Mail"
                                  name="email"
                                  value={values?.email}
                                  onChange={handleChange}
                                />
                                <Index.FormHelperText error>
                                  {errors?.email && touched?.email
                                    ? errors?.email
                                    : null}
                                </Index.FormHelperText>
                              </Index.Box>
                            </Index.Box>
                          </Index.Box>
                          <Index.Box
                            gridColumn={{
                              xs: "span 12",
                              sm: "span 12",
                              md: "span 12",
                              lg: "span 12"
                            }}
                            className="grid-column"
                          >
                            <Index.Box className="input-box footer-input">
                              <Index.Box className="form-group">
                                <Index.TextareaAutosize
                                  aria-label="minimum height"
                                  // minRows={3}
                                  placeholder="About yourself (Optional)"
                                  className="form-control-textarea"
                                  name="message"
                                  value={values?.message}
                                  onChange={handleChange}
                                />
                                <Index.FormHelperText error>
                                  {errors?.message && touched?.message
                                    ? errors?.message
                                    : null}
                                </Index.FormHelperText>
                              </Index.Box>
                            </Index.Box>
                          </Index.Box>
                        </Index.Box>
                      </Index.Box>
                      <Index.Box className="footer-form-btn white-btn-main">
                        <Index.Button
                          variant="contained"
                          className="footer-btn white-btn"
                          type="submit"
                        >
                          Send{" "}
                          <span>
                            <img
                              src={PagesIndex.Svg.sendIcon}
                              alt="Send"
                              className="footer-btn-icon"
                            />
                          </span>
                        </Index.Button>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </PagesIndex.Form>
              )}
            </PagesIndex.Formik>
            <Index.Box className="footer-social-main">
              <Index.Typography className="footer-social-title">
                Our socials
              </Index.Typography>
              <Index.Box className="footer-social-icon">
                <img
                  src={PagesIndex.Svg.whiteThinkArrow}
                  alt="Arrow"
                  className="footer-social-arrow"
                />
                <Index.List className="footer-social-ul">
                  <Index.ListItem className="footer-social-li">
                    <Index.Link
                      className="footer-social-link"
                      to="https://t.me/BIZZONGames"
                      target="_blank"
                    >
                      <img
                        src={PagesIndex.Svg.telegram}
                        className="footer-social-icon"
                        alt="discord"
                      />
                    </Index.Link>
                  </Index.ListItem>
                  <Index.ListItem className="footer-social-li">
                    <Index.Link
                      className="footer-social-link"
                      to="https://x.com/bizzongames"
                      target="_blank"
                    >
                      <img
                        src={PagesIndex.Svg.twitter}
                        className="footer-social-icon"
                        alt="discord"
                      />
                    </Index.Link>
                  </Index.ListItem>
                </Index.List>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.Box className="footer-bottom">
            <Index.Box className="footer-bottom-left-main">
              <Index.List className="footer-nav-list">
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/ranking/"
                  >
                    Ranking
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/staking/"
                  >
                    Staking
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/gamehub/"
                  >
                    GameHub
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/ido/"
                  >
                    IDO
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/blog/"
                  >
                    Blog
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-nav-list-item">
                  <Index.Link
                    className="footer-nav-link"
                    target="_blank"
                    to="https://www.bizzon.io/about/"
                  >
                    About
                  </Index.Link>
                </Index.ListItem>
              </Index.List>
            </Index.Box>
            <Index.Box className="footer-bottom-right-main">
              <Index.List className="footer-terms-list">
                <Index.ListItem className="footer-terms-list-item">
                  <Index.Link
                    className="footer-terms-link"
                    target="_blank"
                    to="https://www.bizzon.io/terms/"
                  >
                    Terms of use
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-terms-list-item">
                  <Index.Link
                    className="footer-terms-link"
                    target="_blank"
                    to="https://www.bizzon.io/disclaimer/"
                  >
                    Disclaimer
                  </Index.Link>
                </Index.ListItem>
                <Index.ListItem className="footer-terms-list-item">
                  <Index.Link
                    className="footer-terms-link"
                    target="_blank"
                    to="https://www.bizzon.io/privacy/"
                  >
                    Privacy policy
                  </Index.Link>
                </Index.ListItem>
              </Index.List>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
