// Local Data
import { tasks } from "./sample";
// Mongoose Model
import User from "./models/User";

export const resolvers ={
    Query:{
        hello: ()=>{return 'hola query respuesta'},
        saludo(root, args) {return `Hello ${args.nombre}`},
        Tasks() {return tasks; },
        async Users() {
            const users = await User.find();
            return users;
        }
    },
    Mutation:{
        createTask(_, { input }) {
            console.log(input)
            const newId = tasks.length;
            input._id = newId;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, {new: true}); //new tru es para q retorne el edited row
        }
    }
};