import * as Yup from "yup";
import { contactUsForm } from "../../component/user/defaulLayout/defaultLayoutInterface";
import { AddProfileInterFace } from "../../container/pages/profile/profileInterface";
import { AddUserDocInterface } from "../../container/pages/kycStatus/kycInterface";

// const emailRegex =
//   /\b^[a-zA-Z0-9.]+@[A-Za-z0-9-]+\.[A-Za-z]{2,3}(?:\.[A-Za-z]{2,3})?\b$/;
const emailRegex =
  /^[a-zA-Z0-9.]+@[A-Za-z0-9-]*[A-Za-z][A-Za-z0-9-]*\.[A-Za-z]{2,3}(?:\.[A-Za-z]{2,3})?$/;
// const otpRegex = /^\d{4}$/;
// const companyNameRagex =
//   /^(?=.*[a-zA-Z])(?=.*[a-zA-Z0-9])[\p{L}\p{M}\p{N}\p{P}\p{S} !@#$%^&*()_+\-=,.<>?;:'"{}|\\/~`]+$/u;
// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%,*?&~`#()[\]{}<>^/\\|+=_-]).{8,}$/;
const fullNameRegex = /^(?=[a-zA-Z])[a-zA-Z]+([',.\- ][a-zA-Z]?[a-zA-Z]*)*$/;
// const firstLastNameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
// const positionRegex =
//   /^(?!^[^a-zA-Z0-9 ]+$)(?!^\d+$)[a-zA-Z0-9_@!#$%^&*()\-+={}[\]:;"'<>,.?/\\|~` ]+$/;
// const titleRegex =
//   /^(?!^[^a-zA-Z0-9\s]+$)[a-zA-Z0-9\s_@!#$%^&*()\-+={}[\]:;"'<>,.?/\\|~`]+$/;

// const getCharacterValidationError = (str: string) => {
//   return `Your password must have at least 1 ${str} character`;
// };

export const valueValidationError = (
  fieldName: string,
  str: string
): string => {
  return `${fieldName} can not contain ${str}`;
};

export const contactUsFormSchema = Yup.object({
  user_type: Yup.string(),
  email: Yup.string()
    .required("Please enter email")
    .test("no-starting-dot", "Please enter a valid email", (value) => {
      if (!value) return false;
      return !/^\./.test(value);
    })
    .test("no-ending-dot", "Please enter a valid email", (value) => {
      if (!value) return false;
      const username = value.split("@")[0];
      return !/\.$/.test(username);
    })
    .test("min-username-length", "Please enter a valid email", (value) => {
      if (!value) return false;
      const username = value.split("@")[0];
      return username.length >= 6;
    })
    .test(
      "consecutive-dots",
      "Please enter a valid email",
      (value?: string) => !/\.{2,}/.test(value || "")
    )
    .matches(emailRegex, "Please enter a valid email"),
  name: Yup.string()
    .required("Please enter name")
    .matches(
      fullNameRegex,
      valueValidationError("Name", "numbers and special characters")
    )
    .matches(/^(?!\s+$).*$/, "Please enter valid name"),
  telegram: Yup.string()
    .required("Please enter telegram")
    .matches(/^(?!\s+$).*$/, "Please enter valid telegram"),
  message: Yup.string().matches(/^(?!\s+$).*$/, "Please enter valid telegram"),
}) as Yup.Schema<contactUsForm>;

export const profileValidationSchema = Yup.object({
  email: Yup.string()
    .test("no-starting-dot", "Please enter a valid email address", (value) => {
      if (!value) return false;
      return !/^\./.test(value);
    })
    .test("no-ending-dot", "Please enter a valid email address", (value) => {
      if (!value) return false;
      const username = value.split("@")[0];
      return !/\.$/.test(username);
    })
    .test(
      "min-username-length",
      "Please enter a valid email address",
      (value) => {
        if (!value) return false;
        const username = value.split("@")[0];
        return username.length >= 6;
      }
    )
    .test(
      "consecutive-dots",
      "Please enter a valid email address",
      (value?: string) => !/\.{2,}/.test(value || "")
    )
    .matches(emailRegex, "Please enter a valid email")
    .required("Please enter email address"),
  first_name: Yup.string()
    .required("Please enter first name")
    .matches(
      /^(?:(?!\s{2,}).)+$/,
      valueValidationError(
        "First name",
        "more than one space between two words"
      )
    )
    .matches(
      /^(?!\s)(.*\S)?(?<!\s)$/,
      valueValidationError("First name", "spaces at start and end")
    )
    .matches(
      fullNameRegex,
      valueValidationError("First name", "numbers and special characters")
    ),
  last_name: Yup.string()
    .required("Please enter last name")
    .matches(
      /^(?:(?!\s{2,}).)+$/,
      valueValidationError("Last name", "more than one space between two words")
    )
    .matches(
      /^(?!\s)(.*\S)?(?<!\s)$/,
      valueValidationError("Last name", "spaces at start and end")
    )
    .matches(
      fullNameRegex,
      valueValidationError("Last name", "numbers and special characters")
    ),
}) as Yup.Schema<AddProfileInterFace>;

export const AddUserDocValidationSchema = Yup.object({
  pancard: Yup.mixed().when("drivingLicense2", (_, schema, checked) => {
    if (
      checked?.context?.adharCard1 !== undefined &&
      checked?.context?.drivingLicense1 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload pancard")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  passport1: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.passport2 == undefined ||
      checked?.context?.passportUrl2 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload passport front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  passport2: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.passport1 == undefined ||
      checked?.context?.passportUrl1 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload passport back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  drivingLicense1: Yup.mixed().when("drivingLicense2", (_, schema, checked) => {
    if (
      checked?.context?.adharCard2 !== undefined &&
      checked?.context?.drivingLicense2 == undefined &&
      //my old condation
      checked?.context?.adharCard1 !== undefined &&
      checked?.context?.pancard !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload driving licence front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  drivingLicense2: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (checked?.context?.drivingLicense1 == undefined) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload driving licence back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  adharCard1: Yup.mixed().when("drivingLicense2", (_, schema, checked) => {
    if (
      checked?.context?.adharCard2 == undefined &&
      checked?.context?.drivingLicense2 !== undefined &&
      //my old condation
      checked?.context?.drivingLicense1 !== undefined &&
      checked?.context?.pancard !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload government id front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  adharCard2: Yup.mixed().when("drivingLicense2", (_, schema, checked) => {
    if (checked?.context?.adharCard1 == undefined) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload government id back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
}) as Yup.Schema<AddUserDocInterface>;

export const editUserDocValidationSchema = Yup.object({
  pancard: Yup.mixed<File>()
    .notRequired()
    .nullable()
    .test(
      "fileType",
      "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
      (value: any) => {
        if (!value) return true;
        const allowedFormats = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "application/pdf",
        ];
        return allowedFormats.includes(value.type);
      }
    )
    .test("fileSize", "File size too large, max file size is 5 Mb", (file) => {
      if (file) {
        return file.size <= 5048000;
      } else {
        return true;
      }
    }),
  passport1: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.passport2 == undefined ||
      checked?.context?.passportUrl2 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload passport front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  passport2: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.passport1 == undefined ||
      checked?.context?.passportUrl1 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload passport back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  drivingLicense1: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.drivingLicense2 == undefined ||
      checked?.context?.drivingLicenseUrl2 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload driving licence front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  drivingLicense2: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.drivingLicense1 == undefined ||
      checked?.context?.drivingLicenseUrl1 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload driving licence back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  adharCard1: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.adharCard2 == undefined ||
      checked?.context?.adharCardUrl2 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload government id front")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
  adharCard2: Yup.mixed().when("pancardUrl1", (_, schema, checked) => {
    if (
      checked?.context?.adharCard1 == undefined ||
      checked?.context?.adharCardUrl1 !== undefined
    ) {
      return schema
        .notRequired()
        .nullable()
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    } else {
      return schema
        .required("Please upload government id back")
        .test(
          "fileType",
          "Invalid file type. Only JPEG, JPG, PDF and PNG are allowed.",
          (value: any) => {
            if (!value) return true;
            const allowedFormats = [
              "image/jpeg",
              "image/jpg",
              "image/png",
              "application/pdf",
            ];
            return allowedFormats.includes(value.type);
          }
        )
        .test(
          "fileSize",
          "File size too large, max file size is 5 Mb",
          (file: any) => {
            if (file) {
              return file.size <= 5048000;
            } else {
              return true;
            }
          }
        );
    }
  }),
}) as Yup.Schema<AddUserDocInterface>;
