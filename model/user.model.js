import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        }
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;

    