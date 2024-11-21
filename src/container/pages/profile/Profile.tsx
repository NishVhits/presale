import { useEffect, useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import { AddProfileInterFace, GetProfileInterFace } from "./profileInterface";
// import PagesIndex from "../../PagesIndex";

export default function Profile() {
  const { userDetails } = PagesIndex.useSelector(
    (state: any) => state.AdminReducer
  );
  const [_, setButtonSpinner] = useState(false);
  const [selectedData, setSelectedData] = useState<GetProfileInterFace>({
    email: "",
    _id: "",
    first_name: "",
    last_name: "",
    wallet_address: "",
    is_kyc_verified: "",
  });

  const initialValues: AddProfileInterFace = {
    email: selectedData?.email ? selectedData?.email : "",
    first_name: selectedData?.first_name ? selectedData?.first_name : "",
    last_name: selectedData?.last_name ? selectedData?.last_name : "",
  };

  const handleGetData = () => {
    PagesIndex.apiGetHandler(
      PagesIndex.Api.GET_PROFILE + "/" + userDetails?._id
    ).then((res) => {
      if (res.status === 200) {
        setSelectedData(res.data);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);

  const handleSubmit = async (values: AddProfileInterFace) => {
    const formData = new FormData();
    formData.append("email", values?.email);
    formData.append("first_name", values?.first_name);
    formData.append("last_name", values?.last_name);
    //     formData.append("image", values?.address);
    setButtonSpinner(true);
    try {
      const res = await PagesIndex.apiPostHandler(
        PagesIndex.Api.UPDATE_PROFILE,
        formData
      );
      setButtonSpinner(false);
      if (res.status === 200 || res.status === 201) {
        PagesIndex.toasterSuccess(res?.message);
      } else {
        PagesIndex.toasterError(res?.message);
        setButtonSpinner(false);
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <Index.Box className="page-content-main">
      <Index.Box className="inner-page-title-main">
        <Index.Typography className="inner-page-title">
          Profile
        </Index.Typography>
      </Index.Box>

      <Index.Box className="edit-profile-row">
        <PagesIndex.Formik
          enableReinitialize
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={PagesIndex.profileValidationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <PagesIndex.Form onSubmit={handleSubmit}>
              <Index.Box sx={{ width: 1 }} className="grid-main">
                <Index.Box
                  display="grid"
                  gridTemplateColumns="repeat(12, 1fr)"
                  gap={{ xs: 2, sm: 2, md: 2, lg: 2 }}
                >
                  <Index.Box
                    gridColumn={{
                      xs: "span 12",
                      sm: "span 6",
                      md: "span 6",
                      lg: "span 6",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="input-box profile-input">
                      <Index.FormHelperText className="form-lable">
                        First Name
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="form-control"
                          placeholder="Enter First Name"
                          onChange={handleChange}
                          name="first_name"
                          value={values.first_name}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              document.getElementById("password")?.focus();
                            }
                          }}
                          // error={
                          //   errors?.first_name && touched?.first_name
                          //     ? true
                          //     : false
                          // }
                          inputProps={{ maxLength: 15 }}
                          InputLabelProps={{ shrink: !!values.first_name }}
                        />
                      </Index.Box>
                      <Index.FormHelperText className="error-text">
                        {errors?.first_name && touched?.first_name
                          ? errors?.first_name
                          : null}
                      </Index.FormHelperText>
                    </Index.Box>
                  </Index.Box>
                  <Index.Box
                    gridColumn={{
                      xs: "span 12",
                      sm: "span 6",
                      md: "span 6",
                      lg: "span 6",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="input-box profile-input">
                      <Index.FormHelperText className="form-lable">
                        Last Name
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="form-control"
                          placeholder="Enter Last Name"
                          onChange={handleChange}
                          name="last_name"
                          value={values.last_name}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              document.getElementById("password")?.focus();
                            }
                          }}
                          // error={
                          //   errors?.last_name && touched?.last_name
                          //     ? true
                          //     : false
                          // }
                          inputProps={{ maxLength: 15 }}
                          InputLabelProps={{ shrink: !!values.last_name }}
                        />
                      </Index.Box>
                      <Index.FormHelperText className="error-text">
                        {errors?.last_name && touched?.last_name
                          ? errors?.last_name
                          : null}
                      </Index.FormHelperText>
                    </Index.Box>
                  </Index.Box>

                  <Index.Box
                    gridColumn={{
                      xs: "span 12",
                      sm: "span 6",
                      md: "span 6",
                      lg: "span 6",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="input-box profile-input">
                      <Index.FormHelperText className="form-lable">
                        Email
                      </Index.FormHelperText>
                      <Index.Box className="form-group">
                        <Index.TextField
                          fullWidth
                          id="fullWidth"
                          className="form-control"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          name="email"
                          value={values.email}
                          // error={errors?.email && touched?.email ? true : false}
                          inputProps={{ maxLength: 50 }}
                          InputLabelProps={{ shrink: !!values.email }}
                        />
                      </Index.Box>
                      <Index.FormHelperText className="error-text">
                        {errors?.email && touched?.email ? errors?.email : null}
                      </Index.FormHelperText>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>

              <Index.Box className="user-btn-flex primary-btn-main border-btn-main">
                {/* <Index.Button className="border-btn">Discard</Index.Button> */}
                <Index.Button className="primary-btn" type="submit">
                  Update
                </Index.Button>
              </Index.Box>
            </PagesIndex.Form>
          )}
        </PagesIndex.Formik>
      </Index.Box>
    </Index.Box>
  );
}
