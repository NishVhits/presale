// export interface AddUserDocInterface {
//   passport1: File | Blob;
//   passportUrl1?: string;
//   passport2: File | Blob;
//   passportUrl2?: string;
// pancard: any;
// pancardUrl1?: any;
//   drivingLicense1: File | Blob;
//   drivingLicenseUrl1?: string;
//   drivingLicense2: File | Blob;
//   drivingLicenseUrl2?: string;
//   adharCard1: File | Blob;
//   adharCardUrl1?: string;
//   adharCard2: File | Blob;
//   adharCardUrl2?: string;
// }
export interface AddUserDocInterface {
  passport1: any;
  passportUrl1?: any;
  passport2: any;
  passportUrl2?: any;
  pancard: any;
  pancardUrl1?: any;
  drivingLicense1: any;
  drivingLicenseUrl1?: any;
  drivingLicense2: any;
  drivingLicenseUrl2?: any;
  adharCard1: any;
  adharCardUrl1?: any;
  adharCard2: any;
  adharCardUrl2?: any;
}

interface DrivingLicense {
  front: string;
  back: string;
}
interface Govt_id {
  front: string;
  back: string;
}
interface Passport {
  front: string;
  back: string;
}

interface DocumentUpload {
  date: string;
  document: string;
  reason: string;
  doc_name: string;
  status: string;
  _id: string;
}

export interface GetUserDocInterface {
  createdAt: string;
  driving_license: DrivingLicense;
  govt_id: Govt_id;
  passport: Passport;
  driving_license_status: boolean;
  govt_id_status: boolean;
  is_approved: boolean;
  is_deleted: boolean;
  pancard: string;
  pancard_status: boolean;
  passport_status: boolean;
  history: DocumentUpload[];
  updatedAt: string;
  user_id: string;
  __v: number;
  _id: string;
}
