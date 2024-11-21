import { useEffect, useState } from "react";
import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import { AddUserDocInterface, GetUserDocInterface } from "./kycInterface";

export default function KycStatus() {
  const { userDetails } = PagesIndex.useSelector(
    (state: any) => state.AdminReducer
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [selectedDocData, setSelectedDocData] = useState<GetUserDocInterface>({
    createdAt: "",
    driving_license: {
      front: "",
      back: "",
    },
    govt_id: {
      front: "",
      back: "",
    },
    passport: {
      front: "",
      back: "",
    },
    driving_license_status: false,
    govt_id_status: false,
    is_approved: false,
    is_deleted: false,
    pancard: "",
    pancard_status: false,
    passport_status: false,
    history: [],
    updatedAt: "",
    user_id: "",
    __v: 0,
    _id: "",
  });

  const initialDocValues: AddUserDocInterface = {
    pancard: "" as any,
    pancardUrl1: selectedDocData?.pancard
      ? selectedDocData?.pancard
      : ("" as any),
    passport1: "" as any,
    passportUrl1: selectedDocData?.passport?.front
      ? selectedDocData?.passport?.front
      : ("" as any),
    passport2: "" as any,
    passportUrl2: selectedDocData?.passport?.back
      ? selectedDocData?.passport?.back
      : ("" as any),
    drivingLicense1: "" as any,
    drivingLicenseUrl1: selectedDocData?.driving_license?.front
      ? selectedDocData?.driving_license?.front
      : ("" as any),
    drivingLicense2: "" as any,
    drivingLicenseUrl2: selectedDocData?.driving_license?.back
      ? selectedDocData?.driving_license?.back
      : ("" as any),
    adharCard1: "" as any,
    adharCardUrl1: selectedDocData?.govt_id?.front
      ? selectedDocData?.govt_id?.front
      : ("" as any),
    adharCard2: "" as any,
    adharCardUrl2: selectedDocData?.govt_id?.back
      ? selectedDocData?.govt_id?.back
      : ("" as any),
  };

  // for img
  const renderPanCardImage = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.pancard instanceof File) {
      let pdf = values.pancard?.name?.includes(".pdf");
      isImageBlob = values.pancard instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.pancard);
      }
    } else {
      const isUploadImg = values?.pancardUrl1 || values.pancard;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.pancardUrl1
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${values?.pancardUrl1}`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.pancardUrl1 || values.pancard
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  // for img
  const renderPassport1Image = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.passport1 instanceof File) {
      let pdf = values.passport1?.name?.includes(".pdf");
      isImageBlob = values.passport1 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.passport1);
      }
    } else {
      const isUploadImg = values?.passportUrl1 || values.passport1;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.passportUrl1
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${values?.passportUrl1}`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.passportUrl1 || values.passport1
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };
  const renderPassport2Image = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.passport2 instanceof File) {
      let pdf = values.passport2?.name?.includes(".pdf");
      isImageBlob = values.passport2 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.passport2);
      }
    } else {
      const isUploadImg = values?.passportUrl2 || values.passport2;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.passportUrl2
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${values?.passportUrl2}`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.passportUrl2 || values.passport2
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  // for img
  const renderLicenceImageFront = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.drivingLicense1 instanceof File) {
      let pdf = values.drivingLicense1?.name?.includes(".pdf");
      isImageBlob = values.drivingLicense1 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.drivingLicense1);
      }
    } else {
      const isUploadImg = values?.drivingLicenseUrl1 || values.drivingLicense1;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.drivingLicenseUrl1
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${
              values?.drivingLicenseUrl1
            }`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.drivingLicenseUrl1 || values.drivingLicense1
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  // for img
  const renderLicenceImageBack = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.drivingLicense2 instanceof File) {
      let pdf = values.drivingLicense2?.name?.includes(".pdf");
      isImageBlob = values.drivingLicense2 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.drivingLicense2);
      }
    } else {
      const isUploadImg = values?.drivingLicenseUrl2 || values.drivingLicense2;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.drivingLicenseUrl2
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${
              values?.drivingLicenseUrl2
            }`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.drivingLicenseUrl2 || values.drivingLicense2
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  const renderAadharImageFront = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.adharCard1 instanceof File) {
      let pdf = values.adharCard1?.name?.includes(".pdf");
      isImageBlob = values.adharCard1 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.adharCard1);
      }
    } else {
      const isUploadImg = values?.adharCardUrl1 || values.adharCard1;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.adharCardUrl1
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${values?.adharCardUrl1}`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.adharCardUrl1 || values.adharCard1
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  // for img
  const renderAadharImageBack = (values: AddUserDocInterface) => {
    let imageUrl = "" as any;
    let src;
    let isImageBlob = false;
    if (values.adharCard2 instanceof File) {
      let pdf = values.adharCard2?.name?.includes(".pdf");
      isImageBlob = values.adharCard2 instanceof Blob;
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else if (isImageBlob) {
        src = URL.createObjectURL(values.adharCard2);
      }
    } else {
      const isUploadImg = values?.adharCardUrl2 || values.adharCard2;
      let pdf = typeof isUploadImg === "string" && isUploadImg.includes("pdf");
      if (pdf) {
        src = PagesIndex.Jpg.pdfImg;
      } else {
        imageUrl = values?.adharCardUrl2
          ? `${import.meta.env.VITE_BASE_URL_IMAGE}${values?.adharCardUrl2}`
          : null;
        src = imageUrl;
      }
    }
    return (
      <img
        className={
          values?.adharCardUrl2 || values.adharCard2
            ? "document-upload-img"
            : "document-upload-icon-img"
        }
        src={src || PagesIndex.Svg.uploadIcon}
        alt="district"
      />
    );
  };

  const handleGetData = () => {
    PagesIndex.apiGetHandler(
      PagesIndex.Api.GET_KYC + "/" + userDetails?._id
    ).then((res) => {
      if (res.status === 200) {
        setSelectedDocData(res.data);
      } else {
        PagesIndex.toasterError(res?.message);
      }
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);

  const handleDocSubmit = async (values: AddUserDocInterface) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("user_id", userDetails?._id);
    if (selectedDocData?._id) {
      formData.append("id", selectedDocData?._id);
    }
    formData.append("pancard", values?.pancard ? values?.pancard : "");
    formData.append(
      "passport_front",
      values?.passport1 ? values?.passport1 : ""
    );
    formData.append(
      "passport_back",
      values?.passport2 ? values?.passport2 : ""
    );
    formData.append(
      "driver_license_front",
      values?.drivingLicense1 ? values?.drivingLicense1 : ""
    );
    formData.append(
      "driver_license_back",
      values?.drivingLicense2 ? values?.drivingLicense2 : ""
    );
    formData.append(
      "govt_id_front",
      values?.adharCard1 ? values?.adharCard1 : ""
    );
    formData.append(
      "govt_id_back",
      values?.adharCard2 ? values?.adharCard2 : ""
    );
    try {
      const res = await PagesIndex.apiPostHandler(
        PagesIndex.Api.ADD_EDIT_KYC,
        formData
      );
      setLoading(false);
      if (res.status === 200 || res.status === 201) {
        PagesIndex.toasterSuccess(res?.message);
        handleGetData();
      } else {
        PagesIndex.toasterError(res?.message);
      }
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <PagesIndex.Formik
      enableReinitialize
      onSubmit={handleDocSubmit}
      initialValues={initialDocValues}
      validationSchema={
        selectedDocData?._id
          ? PagesIndex.editUserDocValidationSchema
          : PagesIndex.AddUserDocValidationSchema
      }
      // validationSchema={
      //   !selectedDocData?._id
      //     ? PagesIndex.editUserDocValidationSchema
      //     : PagesIndex.AddUserDocValidationSchema
      // }
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <PagesIndex.Form onSubmit={handleSubmit}>
          <Index.Box className="page-content-main">
            <Index.Box className="inner-page-title-main">
              <Index.Typography className="inner-page-title">
                KYC Status{" "}
                <span className="kyc-status-approved kyc-status-pending kyc-status-rejected kyc-status-text">
                  {selectedDocData?.is_approved && (
                    <img
                      src={PagesIndex.Svg.approveIcon}
                      className="table-icon"
                      alt=""
                    />
                  )}
                </span>
              </Index.Typography>
            </Index.Box>

            <Index.Box className="kyc-status-row">
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Pancard
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderPanCardImage(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="pancard"
                            name="pancard"
                            disabled={
                              selectedDocData?.pancard_status ||
                              selectedDocData?.is_approved
                            }
                            type="file"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("pancard", files[0]);
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.pancard &&
                          touched?.pancard &&
                          typeof errors.pancard === "string"
                            ? errors?.pancard
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Passport Front
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderPassport1Image(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="passport1"
                            name="passport1"
                            disabled={
                              selectedDocData?.passport_status ||
                              selectedDocData?.is_approved
                            }
                            type="file"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("passport1", files[0]);
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.passport1 &&
                          touched?.passport1 &&
                          typeof errors.passport1 === "string"
                            ? errors?.passport1
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Passport Back
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderPassport2Image(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="passport2"
                            name="passport2"
                            disabled={
                              selectedDocData?.passport_status ||
                              selectedDocData?.is_approved
                            }
                            type="file"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("passport2", files[0]);
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.passport2 &&
                          touched?.passport2 &&
                          typeof errors.passport2 === "string"
                            ? errors?.passport2
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Driving Licence Front
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderLicenceImageFront(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="drivingLicense1"
                            name="drivingLicense1"
                            disabled={
                              selectedDocData?.driving_license_status ||
                              selectedDocData?.is_approved
                            }
                            type="file"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("drivingLicense1", files[0]);
                                // if (!values?.drivingLicenseUrl2) {
                                //   setFieldValue("drivingLicense2", "");
                                //   setFieldValue("drivingLicenseurl2", "");
                                // }
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.drivingLicense1 &&
                          touched?.drivingLicense1 &&
                          typeof errors.drivingLicense1 === "string"
                            ? errors?.drivingLicense1
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Driving Licence Back
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderLicenceImageBack(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="drivingLicense2"
                            name="drivingLicense2"
                            type="file"
                            disabled={
                              selectedDocData?.driving_license_status ||
                              selectedDocData?.is_approved
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("drivingLicense2", files[0]);
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.drivingLicense2 &&
                          touched?.drivingLicense2 &&
                          typeof errors.drivingLicense2 === "string"
                            ? errors?.drivingLicense2
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Government Id Front
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderAadharImageFront(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="adharCard1"
                            name="adharCard1"
                            disabled={
                              selectedDocData?.govt_id_status ||
                              selectedDocData?.is_approved
                            }
                            type="file"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("adharCard1", files[0]);
                                // if (!values?.drivingLicenseUrl2) {
                                //   setFieldValue("drivingLicense2", "");
                                //   setFieldValue("drivingLicenseurl2", "");
                                // }
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.adharCard1 &&
                          touched?.adharCard1 &&
                          typeof errors.adharCard1 === "string"
                            ? errors?.adharCard1
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
                      lg: "span 4",
                    }}
                    className="grid-column"
                  >
                    <Index.Box className="document-box">
                      <Index.Typography className="doucment-lable">
                        Government Id Back
                      </Index.Typography>
                      <Index.Box className="document-upload-btn-main">
                        <Index.Button
                          variant="contained"
                          component="label"
                          className="document-upload-btn"
                        >
                          {renderAadharImageBack(values)}
                          <input
                            hidden
                            accept="image/*"
                            id="adharCard2"
                            name="adharCard2"
                            type="file"
                            disabled={
                              selectedDocData?.govt_id_status ||
                              selectedDocData?.is_approved
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = e.target.files;
                              if (files && files.length > 0) {
                                setFieldValue("adharCard2", files[0]);
                              }
                            }}
                          />
                        </Index.Button>
                        <Index.FormHelperText className="error-text">
                          {errors?.adharCard2 &&
                          touched?.adharCard2 &&
                          typeof errors.adharCard2 === "string"
                            ? errors?.adharCard2
                            : null}
                        </Index.FormHelperText>
                      </Index.Box>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
              </Index.Box>
              <Index.Box className="user-btn-flex primary-btn-main border-btn-main">
                <Index.Button
                  className="border-btn"
                  type="submit"
                  disabled={selectedDocData?.is_approved || loading}
                >
                  Upload
                </Index.Button>
              </Index.Box>
            </Index.Box>

            <Index.Box className="kyc-status-data-box">
              <Index.Box className="inner-page-table-main kyc-status-table">
                <Index.TableContainer
                  component={Index.Paper}
                  className="inner-table-container"
                >
                  <Index.Table
                    aria-label="simple table"
                    className="inner-table"
                  >
                    <Index.TableHead className="inner-table-head">
                      <Index.TableRow className="inner-table-row">
                        <Index.TableCell
                          component="th"
                          variant="head"
                          className="inner-table-th"
                          width="10%"
                        >
                          Document
                        </Index.TableCell>
                        <Index.TableCell
                          component="th"
                          variant="head"
                          className="inner-table-th"
                          width="10%"
                        >
                          Date&Time
                        </Index.TableCell>
                        <Index.TableCell
                          component="th"
                          variant="head"
                          className="inner-table-th"
                          width="10%"
                        >
                          Status
                        </Index.TableCell>
                      </Index.TableRow>
                    </Index.TableHead>
                    <Index.TableBody>
                      {selectedDocData?.history?.length > 0 ? (
                        selectedDocData?.history
                          ?.slice()
                          ?.reverse()
                          ?.slice(
                            currentPage * rowsPerPage,
                            currentPage * rowsPerPage + rowsPerPage
                          )
                          ?.map((ele) => {
                            return (
                              <Index.TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <Index.TableCell
                                  component="td"
                                  variant="body"
                                  className="inner-table-td"
                                >
                                  <Index.Box className="table-data-documnent-flex">
                                    {ele?.status == "approved" ? (
                                      <img
                                        src={PagesIndex.Svg.approveIcon}
                                        className="table-icon"
                                        alt=""
                                      />
                                    ) : ele?.status == "pending" ? (
                                      <img
                                        src={PagesIndex.Svg.pendingIcon}
                                        className="table-icon"
                                        alt=""
                                      />
                                    ) : (
                                      <Index.Tooltip
                                        title={ele?.reason}
                                        arrow
                                        placement="bottom"
                                        className="user-tooltip"
                                      >
                                        <img
                                          src={PagesIndex.Svg.infoIcon}
                                          className="table-icon"
                                          alt=""
                                        />
                                      </Index.Tooltip>
                                    )}

                                    <Index.Typography
                                      className="table-data-text text-underline"
                                      onClick={() =>
                                        window.open(
                                          import.meta.env.VITE_BASE_URL_IMAGE +
                                            ele?.document,
                                          "_blank",
                                          "noopener,noreferrer"
                                        )
                                      }
                                    >
                                      {/* <img
                                        src={PagesIndex.Svg.documentViewIcon}
                                        className="table-icon"
                                        alt=""
                                      /> */}

                                      {ele?.doc_name
                                        ?.toLowerCase()
                                        .split(" ")
                                        .map(
                                          (word) =>
                                            word.charAt(0).toUpperCase() +
                                            word.slice(1)
                                        )
                                        .join(" ")}
                                    </Index.Typography>
                                  </Index.Box>
                                </Index.TableCell>

                                <Index.TableCell
                                  component="td"
                                  variant="body"
                                  className="inner-table-td"
                                >
                                  {PagesIndex.moment(ele?.date).format(
                                    "DD-MM-YYYY hh:mm A"
                                  )}
                                </Index.TableCell>
                                <Index.TableCell
                                  component="td"
                                  variant="body"
                                  className="inner-table-td"
                                >
                                  <Index.Tooltip
                                    title={ele?.reason}
                                    arrow
                                    placement="bottom"
                                    className="user-tooltip"
                                  >
                                    <Index.Typography className="table-data-text">
                                      {ele?.reason ? ele?.reason : "-"}
                                    </Index.Typography>
                                  </Index.Tooltip>
                                </Index.TableCell>
                              </Index.TableRow>
                            );
                          })
                      ) : (
                        <PagesIndex.DataNotFound />
                      )}
                    </Index.TableBody>
                  </Index.Table>
                </Index.TableContainer>
              </Index.Box>
              {selectedDocData?.history?.length > 0 && (
                <PagesIndex.Pagination
                  page={currentPage}
                  rowsPerPage={rowsPerPage}
                  setPage={setCurrentPage}
                  setRowsPerPage={setRowsPerPage}
                  count={Math.ceil(selectedDocData?.history?.length)}
                />
              )}
            </Index.Box>
          </Index.Box>
        </PagesIndex.Form>
      )}
    </PagesIndex.Formik>
  );
}
