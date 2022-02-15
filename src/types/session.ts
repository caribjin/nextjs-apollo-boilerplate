import UserType from './user';

type SessionType = {
  user: UserType;
  expires: Date;
};

export default SessionType;
