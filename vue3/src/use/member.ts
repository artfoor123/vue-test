import { reactive, watchEffect, watch } from 'vue';

interface TypeMember {
    name: string;
    age: number;
}

const useMember = () => {
    const member: TypeMember = reactive({
        name: "John",
        age: 18,
    });
    watchEffect(()=> {
        member.name == 'beer' ? member.age = 20 : member.age = 18;
    });

    const changeName = (name: string) => {
        member.name = name;
    };
    return {
        member,
        changeName
    };
}

export default useMember