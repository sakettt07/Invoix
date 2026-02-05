import mongoose from "mongoose";

interface ISignature {
    name: string;
    image: string
}

interface ISettings {
    _id?: mongoose.Types.ObjectId;
    invoiceLogo: string;
    signature: ISignature;
    createdAt?: Date;
    updatedAt?: Date
}

const signatureSchema = new mongoose.Schema<ISignature>({

})