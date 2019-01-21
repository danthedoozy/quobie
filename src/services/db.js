import { database } from './config';

export const write = ({
  signUp
}) => {
  database.ref("/").set({
    signUp,
  });
};
