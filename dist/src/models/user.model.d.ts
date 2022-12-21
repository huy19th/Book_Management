/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
declare const User: import("mongoose").Model<{
    email: string;
    name: string;
    password: string;
    phone: string;
    address: string;
<<<<<<< HEAD
    role: "user" | "admin";
=======
    role?: "user" | "admin";
>>>>>>> 4297fc14139cd6d2c6a138122657c908441e7e90
}, {}, {}, {}, Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    email: string;
    name: string;
    password: string;
    phone: string;
    address: string;
<<<<<<< HEAD
    role: "user" | "admin";
=======
    role?: "user" | "admin";
>>>>>>> 4297fc14139cd6d2c6a138122657c908441e7e90
}>>;
export default User;
