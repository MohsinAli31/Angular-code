export interface Post {
  User: object;
  createdAt: any;
  id: number;
  title: string;
  description: string;
  picture: any;
  userId: number;
  categoryId: number;
  updatedAt: string;
}

export interface Profile {
  id: number;
  gender: string;
  phonenumber: number;
  picture: string;
  userId: number;
  bio: string;
}
// User: {
//   name: 'Muttarab';
// }
// categoryId: 5;
// createdAt: '2022-02-17T12:23:04.208Z';
// description: 'Established in 1882 at Lahore, the University of the Punjab is the largest and the oldest seat of higher learning in Pakistan.';
// id: 15;
// picture: 'images/1645594482641--punjab.jpg';
// title: 'Punajb University Lahore';
// updatedAt: '2022-02-23T12:48:04.811Z';
// userId: 32;
