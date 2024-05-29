import { Schema, InferSchemaType, model } from "mongoose";

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    coverImage: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})



export type IMenu = InferSchemaType<typeof menuSchema>;


export const Menu = model("menu", menuSchema);