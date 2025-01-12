import UserModel from "../models/user.model";
import { LPError } from "../utils/error.utils";
import { UserValidatorRequest, UserValidatorResponse } from "../validators/auth.validator";
import bcrypt from "bcryptjs";

export class AuthService {

  async register(userData: UserValidatorRequest): Promise<{_id : string}> {
    const user = await UserModel.findOne({ email: userData.email });

    if (user) {
      throw new LPError("User already exists", 409);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = await UserModel.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      password: hashedPassword,
      email: userData.email
    });

    return {_id : newUser._id.toString()};
  }


  async login(email: string, password: string): Promise<UserValidatorResponse> {
    const user = await UserModel.findOne({email});

    if (!user) {
        throw new LPError("Invalid Credentials", 400);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        throw new LPError("Invalid Credentials", 400);
    }

    return {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        profilePic: user.profilePic,
        created_at: user.createdAt
    };
  }
}
