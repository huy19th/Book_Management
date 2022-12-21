import {Schema, model} from 'mongoose';

type role = 'admin' | 'user';

interface IRole {
    name: role
}

const roleSchema = new Schema<IRole> ({
    name: {
        type: String,
        enum: ['admin', 'user']
    }
})

const Role = model<IRole>('Role', roleSchema);

export default Role;